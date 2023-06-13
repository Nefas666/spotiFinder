import axios from 'axios';

const baseURL = 'https://api.spotify.com/v1';
//const userName = {userName}

export async function getUserPlaylists(accessToken: string, userName: string) {
    const playlistsEndpoint = `/users/${userName}/playlists`;
  
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  
    try {
      const response = await axios.get(`${baseURL}${playlistsEndpoint}`, { headers });
      return response.data.items;
    } catch (error) {
      console.error('Error retrieving playlists:', error);
      throw error;
    }
  }




  