'use client'

import styled from 'styled-components';

interface Artist {
  name: string;
  external_urls: {
    spotify: string;
  };
}

interface Album {
  name: string;
  images: { url: string }[];
}

interface Track {
  name: string;
  artists: Artist[];
  external_urls: {
    spotify: string;
  };
  album: Album;
}

interface TrackCardProps {
  track: Track;
}

const TrackCard: React.FC<TrackCardProps> = ({ track }) => {
    return (
      <StyledWrapper>
        <div className="card">
          <span className="card__title">{track.name}</span>
          <p className="card__content">
            {track.artists.map(artist => artist.name).join(', ')}
          </p>
          {track.album.images.length > 0 && (
            <img className="card__image" src={track.album.images[0]?.url} alt={`Album ${track.album.name} Cover`} />
          )}
          <a className="card__button" href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            Listen on Spotify
          </a>
        </div>
      </StyledWrapper>
    );
  }


const StyledWrapper = styled.div`
.card {
  width: 300px;
  padding: 20px;
  background: #fff;
  border: 6px solid #000;
  box-shadow: 12px 12px 0 #000;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.card:hover {
  transform: translate(-5px, -5px);
  box-shadow: 17px 17px 0 #000;
}

.card__title {
  font-size: 32px;
  font-weight: 900;
  color: #000;
  text-transform: uppercase;
  margin-bottom: 15px;
  display: block;
  position: relative;
  overflow: hidden;
}

.card__title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 90%;
  height: 3px;
  background-color: #000;
  transform: translateX(-100%);
  transition: transform 0.3s;
}

.card:hover .card__title::after {
  transform: translateX(0);
}

.card__content {
  font-size: 16px;
  line-height: 1.4;
  color: #000;
  margin-bottom: 20px;
}
    `;

export default TrackCard;
