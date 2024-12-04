import { NextApiRequest, NextApiResponse } from 'next';
import { encode } from 'querystring';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const scopes = ['user-read-private', 'user-read-email'];
  const redirectUri = process.env.SPOTIFY_CALLBACK_ENDPOINT_PROD;

  const queryParams = {
    response_type: 'code',
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope: scopes.join(' '),
    redirect_uri: redirectUri,
  };

  const authorizeURL = `https://accounts.spotify.com/authorize?${encode(queryParams)}`;
  res.redirect(authorizeURL);
}
