import { useRouter } from 'next/router';
import { useEffect } from 'react';
//import spotifyApi from '../app/spotify';

function Callback() {
  const router = useRouter();

  useEffect(() => {
    async function handleCallback() {
      const { code } = router.query;

      if (typeof code === 'string') {
        const body = new URLSearchParams();
        body.append('grant_type', 'authorization_code');
        body.append('code', code);
        body.append('redirect_uri', 'http://localhost:3000/callback');
        body.append('client_id', process.env.SPOTIFY_CLIENT_ID || '');
        body.append('client_secret', process.env.SPOTIFY_CLIENT_SECRET || '');

        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: body.toString(),
        });

        if (response.ok) {
          const { access_token } = await response.json();
          
          //spotifyApi.setAccessToken(access_token);
          //console.log(access_token);

          // Redirect to your main app page
          router.push('/');
          localStorage.setItem('access_token', access_token);
        }
      }
    }

    handleCallback();
  }, [router]);

  return null; // Placeholder component
}

export default Callback;
