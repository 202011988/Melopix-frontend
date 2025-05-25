import React from 'react';
import MusicPlayer from './MusicPlayer';
import Frame from './Frame';

const GalleryCard = ({
  className = '',
  musicUrl,
  imageUrl,
  name,
  date,
  description,
  style = {},
}) => {
  return (
    <div
      className={`w-full ${className}`}
      style={{ maxWidth: '320px', ...style }}
    >
      <Frame imageUrl={imageUrl} className="mx-auto" />
      <MusicPlayer className="ms-5 me-7 my-5" src={musicUrl} />
      <div className="mx-7">
        <h3 className="mb-2 font-sans font-bold text-left text-xl">{name}</h3>
        <p className="mb-2 font-sans font-normal text-left text-[#61605f]">
          {date}
        </p>
        <p className="font-sans font-normal text-left">{description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
