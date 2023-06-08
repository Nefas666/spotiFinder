'use client'
import React from "react";
import { Card } from "@tremor/react";
import Header from './components/Header'
import Chart from './components/Chart'
import Revenue from './components/Revenue'
import Link from 'next/link';
// import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getUserPlaylists } from '../pages/api/spotify-playlist';


interface Playlist {
  id: number;
  name: string;
  description: string;
  images: { url: string }[];
  tracks: { total: string };
  external_urls : {spotify:string};
}




function Home() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    console.log(accessToken);

    if (accessToken) {
      getUserPlaylists(`${accessToken}`)
        .then((playlists) => {
          console.log(playlists);
          setPlaylists(playlists);
        })
        .catch((error) => {
          console.error('Error retrieving playlists:', error);
        });
    }
  }, []);


  return (
    <div className="App">
      <>

        <div className="h-80">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            SpotyFinder
          </h2>
          <Link className="text-emerald-500 hover:underline hover:decoration-emerald-500 font-bold" href="/api/spotify-redirect" target="_blank">Connect</Link>
        </div>

        <Header />
        <Chart />
        <Revenue/>
        {playlists.map((playlist) => (
          <Card key={playlist.id}>
            <div className="h-80">
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-6xl">
                {playlist.name}
              </h2>
              <p className="mt-2 text-md font-bold tracking-tight text-black md:text-lg">
                {playlist.description}
              </p>
              <p className="mt-2 text-md font-bold tracking-tight text-black md:text-lg">
                {playlist.tracks.total}
              </p>
              <a className="text-emerald-500 hover:underline hover:decoration-emerald-500 font-bold" target="_blank" href={playlist.external_urls.spotify}>
              View Playlist
            </a>

              {playlist.images.map((image, index) => (
                <img className="ratio-square w-20 h-20 rounded-lg" key={index} src={image.url ?? ""} alt={`Playlist ${playlist.name} Image`} />
              ))}            

            </div>
          </Card>
        ))}
      </>
    </div>
  );
}

export default Home;