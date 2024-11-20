'use client'
import React from "react";
import { useEffect, useState } from 'react';
import { Grid, Col, Card } from "@tremor/react";

import Link from 'next/link';
import { getUserPlaylists } from '../pages/api/spotify-playlist';
import { getRecentlyPlayed } from '../pages/api/spotify-recently-played';
import TrackCard from './components/TrackCard';
import PlaylistCard from "./components/PlaylistCard";
import Pattern from "./components/Pattern";
import Input from "./components/Input";



interface Playlist {
  id: number;
  name: string;
  description: string;
  tracks: { total: string };
  external_urls: { spotify: string };
  images: { url: string }[];
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
  }, [userName]);

  useEffect(() => {
    const storedUserName = localStorage.getItem('user_name');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUserName = event.target.value;
    setUserName(newUserName);
    localStorage.setItem('user_name', newUserName);
  };
  return (

    <>
    <div className="flex flex-col justify-center items-stretc text-center">

      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-mono bg-black py-4">
        SpotyFinder
      </h2>
      <p>Connect your Spotify account or search other user accounts easily to display public information such as the recently played tracks, the most favourite playlists and more!</p>
    </div>
      <Pattern />
      <div className="container mx-auto p-4 lg:p-0 relative">
        <Grid className="lg:p-8 p-0 mx-auto grid grid-cols-1 lg:grid-cols-3">
          <Col numColSpanLg={1} numColSpanSm={3}>
            <div className="mt-4 text-white flex flex-col gap-4">
              <Input
                label="Your Spotify username:"
                value={userName}
                onChange={handleUserNameChange}
                placeholder=""
              />
              <Link className="card-button font-mono" href="/api/spotify-redirect" target="self">Connect to your spotify account</Link>
            </div>
          </Col>
            <h2 className="mt-2 font-mono text-4xl font-bold tracking-tight text-white">{userName} favourite playlists:</h2>
          <Col numColSpanSm={1} numColSpanLg={5} className="flex flex-wrap items-center justify-between gap-y-4 mt-8">
            {playlists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </Col>
        </Grid>

        <div className="mt-8 font-mono">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white">Recently Played Tracks</h2>
          {recentlyPlayed.length > 0 ? (
            recentlyPlayed.map((item, index) => (
              <TrackCard key={index} track={item.track} />
            ))
          ) : (
            <p className="text-white">No recently played tracks available.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;