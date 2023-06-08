// import { NextApiRequest, NextApiResponse } from 'next';
// import { authorize } from '../../app/spotify';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   authorize(req, res);
// }

import { NextApiRequest, NextApiResponse } from 'next';
import { encode } from 'querystring';
import spotifyApi from '../../app/spotify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const scopes = ['user-read-private', 'user-read-email']; // Add any additional scopes you need
  const redirectUri = 'http://localhost:3000/callback'; // Your callback URL

  const queryParams = {
    response_type: 'code',
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope: scopes.join(' '),
    redirect_uri: redirectUri,
  };

  const authorizeURL = `https://accounts.spotify.com/authorize?${encode(queryParams)}`;
  res.redirect(authorizeURL);
}
