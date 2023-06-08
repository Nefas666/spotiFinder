import { NextApiRequest, NextApiResponse } from 'next';
import { encode } from 'querystring';
import spotifyApi from '../../app/spotify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const scopes = ['user-read-private', 'user-read-email']; // Add any additional scopes you need
  const defaultRedirectUri = 'http://localhost:3000/callback';
  const alternativeRedirectUri = 'https://fascinating-malasada-a92a20.netlify.app/callback';
  const redirectUri = req.query.useAlternativeCallback ? alternativeRedirectUri : defaultRedirectUri;  // Alternative callback URL // Your callback URL

  const queryParams = {
    response_type: 'code',
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope: scopes.join(' '),
    redirect_uri: redirectUri,
  };

  const authorizeURL = `https://accounts.spotify.com/authorize?${encode(queryParams)}`;
  res.redirect(authorizeURL);
}
