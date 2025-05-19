import React from 'react';
import MusicPlayer from './MusicPlayer';
import Grid from './GridLayout/Grid';
import Row from './GridLayout/Row';
import Col from './GridLayout/Col';
import Frame from './Frame';

const GalleryCard = ({ className = '', musicUrl, imageUrl, name, date, description}) => {
  return (
    <Row  className = {`max-w-xs  ${className}`} style={{ maxWidth: '100px' }}>
        <Col className=''>
            <Frame imageUrl={imageUrl} className='mx-auto' />
            <MusicPlayer className={'mx-7 mb-5'} src={musicUrl} />
            <Col className='mx-7'>
                <h3 className={` mb-2 font-sans font-bold text-left text-xl ${className}`}>
                    {name}
                </h3>
                <p className={`mb-2 font-sans font-normal text-left text-[#61605f] ${className}`}>
                    {date}
                </p>
                <p className={`font-sans font-normal text-left ${className}`}>
                    {description}
                </p>
            </Col>
        </Col>
    </Row>
  );
};

export default GalleryCard;