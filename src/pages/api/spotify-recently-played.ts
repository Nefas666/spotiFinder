import axios from 'axios';

const baseURL = 'https://api.spotify.com/v1';

export async function getRecentlyPlayed(accessToken: string, userName:string) {
    const recentlyPlayedEndpoint = `/${userName}/player/recently-played`;
  
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  
    try {
      const response = await axios.get(`${baseURL}${recentlyPlayedEndpoint}`, { headers });
      return response.data.items;
    } catch (error) {
      console.error('Error retrieving recently played tracks:', error);
      throw error;
    }
}
