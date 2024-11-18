'use client'
import React from "react";
import { useEffect, useState } from 'react';
import { Grid, Col, Card } from "@tremor/react";

import Header from './components/Header'
import Link from 'next/link';
import { getUserPlaylists } from '../pages/api/spotify-playlist';
import { getRecentlyPlayed } from '../pages/api/spotify-recently-played';


interface Playlist {
  id: number;
  name: string;
  description: string;
  images: { url: string }[];
  tracks: { total: string };
  external_urls: { spotify: string };
}

function Home() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [userName, setUserName] = useState<string>('');
  const [recentlyPlayed, setRecentlyPlayed] = useState<any[]>([]);


  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    console.log(accessToken);
    console.log('userInfo', userName);
    console.log('recent', recentlyPlayed);

    if (accessToken) {
      getUserPlaylists(accessToken, userName)
        .then((playlists) => {
          console.log(playlists);
          setPlaylists(playlists);
        })
        .catch((error) => {
          console.error('Error retrieving playlists:', error);
        });

      getRecentlyPlayed(accessToken, userName)
        .then((recentTracks) => {
          console.log(recentTracks);
          setRecentlyPlayed(recentTracks);
        })
        .catch((error) => {
          console.error('Error retrieving recently played tracks:', error);
        });
    }
  }, []);

  useEffect(() => {
    const storedUserName = localStorage.getItem('user_name');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  return (


    <div className="container mx-auto p-4 lg:p-0 relative">
      <Grid className="lg:p-8 p-0 mx-auto grid grid-cols-1 lg:grid-cols-3">
        <Col numColSpanLg={1} numColSpanSm={3} className="h-full flex flex-col items-start">
          <div className="mb-8">
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              SpotyFinder
            </h2>
            <div className="mt-4 text-white">
              <label htmlFor="username">Enter username:</label>
              <input
                type="text"
                id="username"
                name="username"
                className="bg-transparent text-white"
                value={userName}
                onChange={handleUserNameChange}
              />
            </div>
            <Link className="text-emerald-500 text-lg hover:underline hover:decoration-emerald-500 font-bold" href="/api/spotify-redirect" target="_blank">Connect to your spotify account</Link>
            <Header />
          </div>
        </Col>
        <Col numColSpanSm={3} numColSpanLg={3} className="flex flex-wrap items-center justify-between gap-y-4 mt-8">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white">Suggested playlists for you</h2>
          {playlists.map((playlist) => (
            <Card key={playlist.id} className="bg-slate-900 text-white flex flex-row items-stratch justify-start p-4">
              <div className="cols">
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-xl">
                  {playlist.name}
                </h2>
                <p className="mt-2 text-md font-bold tracking-tight text-white md:text-lg">
                  {playlist.description}
                </p>
                <p className="mt-2 text-md font-bold tracking-tight text-white md:text-lg">
                  {playlist.tracks.total}
                </p>
                <a className="text-emerald-500 hover:underline hover:decoration-emerald-500 font-bold" target="_blank" href={playlist.external_urls.spotify}>
                  View Playlist
                </a>
                <div className="flex flex-row justify-start gap-x-4">
                  {playlist.images && playlist.images.length > 0 ? (
                    playlist.images.map((image, index) => (
                      <img className="ratio-square w-20 h-20 rounded-lg" key={index} src={image.url ?? ""} alt={`Playlist ${playlist.name} Image`} />
                    ))
                  ) : (
                    <p>No images available</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </Col>
      </Grid>

      <div className="mt-8">
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-white">Recently Played Tracks</h2>
        {recentlyPlayed.length > 0 ? (
          recentlyPlayed.map((item, index) => (
            <Card key={index} className="bg-slate-900 text-white flex flex-row items-stretch justify-start p-4 mb-4">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">{item.track.name}</h3>
                <p className="text-md">{item.track.artists.map((artist: { name: any; }) => artist.name).join(', ')}</p>
                <a className="text-emerald-500 hover:underline hover:decoration-emerald-500 font-bold" target="_blank" href={item.track.external_urls.spotify}>
                  Listen on Spotify
                </a>
                {item.track.album.images.length > 0 && (
                  <img className="mt-2 w-20 h-20 rounded-lg" src={item.track.album.images[0].url} alt={`Album ${item.track.album.name} Cover`} />
                )}
              </div>
            </Card>
          ))
        ) : (
          <p className="text-white">No recently played tracks available.</p>
        )}
      </div>
    </div>
  );
}

export default Home;