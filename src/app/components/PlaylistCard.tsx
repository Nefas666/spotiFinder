'use client';
import React from 'react';
import styled from 'styled-components';

interface Playlist {
  id: number;
  name: string;
  description: string;
  tracks: { total: string };
  external_urls: { spotify: string };
  images: { url: string }[];
}
interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  return (
    <StyledWrapper>
      <div className="card font-mono">
        <h2 className="card__title">{playlist.name}</h2>
        <p className="card__content">{playlist.description}</p>
        <p className="card__tracks">Total Tracks: {playlist.tracks.total}</p>
        <a className="card__link" target="_blank" rel="noopener noreferrer" href={playlist.external_urls.spotify}>
          View Playlist
        </a>
        <div className="card__images">
          {playlist.images && playlist.images.length > 0 ? (
            playlist.images.map((image, index) => (
              <img className="card__image" key={index} src={image.url ?? ""} alt={`Playlist ${playlist.name} Image`} />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 300px;
    padding: 20px;
    background:  #44FFD2;
    color: black;
    border: 2px solid #000;
    box-shadow: 12px 12px 0 #000;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .card:hover {
    transform: translate(-5px, -5px);
    box-shadow: 17px 17px 0 #000;
  }

  .card__title {
    font-size: 18px;
    margin-bottom: 10px;
    word-break:keep-all;
  }

  .card__content {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .card__tracks {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .card__link {
    color: #10b981;
    font-weight: bold;
    text-decoration: underline;
  }

  .card__images {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 10px;
  }

  .card__image {
    width: 80px;
    height: 80px;
    border: 2px solid #000;
    box-shadow: 12px 12px 0 #000;

  }
`;

export default PlaylistCard;
