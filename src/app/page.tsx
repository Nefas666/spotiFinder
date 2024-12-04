'use client'
import React from "react";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getUserPlaylists } from '../pages/api/spotify-playlist';
import { getRecentlyPlayed } from '../pages/api/spotify-recently-played';
import TrackCard from './components/TrackCard';
import PlaylistCard from "./components/PlaylistCard";
import Pattern from "./components/Pattern";
import Input from "./components/Input";
import Flag from "./components/Flag";
import Alert from "./components/Alert";




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
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectAccount = async () => {
    const accessToken = localStorage.getItem('access_token');
    const storedUserName = localStorage.getItem('user_name');

    if (accessToken && storedUserName) {
      await fetchUserProfile(accessToken);
      try {
        const playlists = await getUserPlaylists(accessToken, storedUserName);
        setPlaylists(playlists);
      } catch (error) {
        console.error('Error retrieving playlists:', error);
      }
    } else {
      alert("Please connect your Spotify account first.");
    }
  };

  useEffect(() => {
    const storedUserName = localStorage.getItem('user_name');

    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);



  const fetchUserProfile = async (accessToken: string) => {
    try {
      const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      const profileData: UserProfile = await result.json();
      setProfile(profileData);
      setIsConnected(true);
      console.log(profileData);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUserName = event.target.value;
    setUserName(newUserName);
    localStorage.setItem('user_name', newUserName);
  };
  return (

    <>
      <div className="flex flex-col justify-center text-center">

        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-mono bg-black py-4">
          SpotyFinder
        </h2>
        <p>Connect your Spotify account or search other user accounts easily to display public information.</p>
        {profile && (
          <div className="mt-4 font-mono text-black flex flex-col justify-center">
            <h3 className="text-2xl font-bold">{profile.display_name}</h3>
            <img src={profile.images[0]?.url} alt="User Avatar" className="rounded-full w-24 h-24 mx-auto" />
            <div className="flex flex-row justify-center items-baseline gap-4"><p>Country:</p><Flag country={profile.country} /></div>
            <p>Email: {profile.email}</p>
            <a href="{profile.external_urls?.spotify}" target="_blank" className="underline">Spotify URL: {profile.external_urls.spotify}</a>
            <p>Followers: {profile.followers.total}</p>
          </div>
        )}

      </div>
      <Pattern />
      <div className="container mx-auto p-4 lg:p-0 relative">
        <div className="lg:p-8 p-0 mx-auto grid grid-cols-1">
          <div className="row-span-full">
            <div className="mt-4 text-white flex flex-col gap-4">
              <Input
                label="Your Spotify username:"
                value={userName}
                onChange={handleUserNameChange}
                placeholder=""
              />
              <button className="card-button font-mono" onClick={handleConnectAccount}>
                Connect to your Spotify account
              </button>
              {isConnected && (
                <Alert message={()=>"test"} />
              )
            }

              {/* <Link className="card-button font-mono" href="/api/spotify-redirect" target="self">Connect to your spotify account</Link> */}
            </div>
          </div>
          <h2 className="mt-2 font-mono text-4xl font-bold tracking-tight text-white bg-black p-1">{userName} top 5 playlists:</h2>
          <div className="flex flex-wrap justify-between gap-x-1 gap-1">
            {playlists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
          {/* <div className="mt-8 font-mono">
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white bg-black p-1">Recently Played Tracks</h2>
            {recentlyPlayed.length > 0 ? (
              recentlyPlayed.map((item, index) => (
                <TrackCard key={index} track={item.track} />
              ))
            ) : (
              <p className="text-white bg-black">No recently played tracks available.</p>
            )}
          </div> */}
        </div>

      </div>
    </>
  );
}

export default Home;