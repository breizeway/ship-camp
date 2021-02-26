import { useEffect, useState } from 'react';

import './index.css';

const PhotoCarousel = ({ photos }) => {

  const [crslPhotos, setCrslPhotos] = useState([]);

  useEffect(() => {
    setCrslPhotos([...photos]);
  }, [])

  const rotateLeft = () => {
    const reorderedPhotos = [...crslPhotos];
    reorderedPhotos.unshift(reorderedPhotos.pop());
    setCrslPhotos(reorderedPhotos);
  }

  const rotateRight = () => {
    const reorderedPhotos = [...crslPhotos];
    reorderedPhotos.push(reorderedPhotos.shift());
    setCrslPhotos(reorderedPhotos);
  }

  return (
    <div className='photo-crsl'>
      {crslPhotos && crslPhotos.map(photo => (
        <div
          key={photo.id}
          className='photo-crsl__photo'
          style={photos && {backgroundImage: `url(${photo.url})`}}
        ></div>
      ))}
      <div className='photo-crsl__button photo-crsl__left-button' onClick={rotateLeft}>
        <i class="fas fa-chevron-left"></i>
      </div>
      <div className='photo-crsl__button photo-crsl__right-button' onClick={rotateRight}>
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  )
};

export default PhotoCarousel;
