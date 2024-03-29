'use client'
import React from "react";
import { useEffect, useState } from 'react';
import { Grid, Col, Card } from "@tremor/react";

import Header from './components/Header'
import Chart from './components/Chart'
import Revenue from './components/Revenue'
import Link from 'next/link';
import Platform from "./components/Platform";
import { getUserPlaylists } from '../pages/api/spotify-playlist';


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

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    console.log(accessToken);
    

    if (accessToken) {
      getUserPlaylists(accessToken, userName)
        .then((playlists) => {
          console.log(playlists);
          setPlaylists(playlists);
        })
        .catch((error) => {
          console.error('Error retrieving playlists:', error);
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
    setUserName(event.target.value);
  };
  return (
    <div className="App container mx-auto p-4 lg:p-0">
      <Grid  className="lg:p-8 p-0 mx-auto grid grid-cols-1 lg:grid-cols-3">

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
            <Platform />
          </div>
        </Col>
        <Col numColSpanSm={3} numColSpanLg={2}>
          <Chart />
          <Revenue />
          
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
                  {playlist.images.map((image, index) => (
                    <img className="ratio-square w-20 h-20 rounded-lg" key={index} src={image.url ?? ""} alt={`Playlist ${playlist.name} Image`} />
                  ))}
                </div>

              </div>
            </Card>
          ))}
        </Col>
      </Grid>
      
    </div>
  );
}

export default Home;