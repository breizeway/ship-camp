import { useEffect, useState } from 'react';

import './index.css';

const PhotoCarousel = ({ photos }) => {

  const [crslPhotos, setCrslPhotos] = useState(photos);

  const rotate = () => {
    const reorderedPhotos = [...crslPhotos];
    const oldFirst = reorderedPhotos.shift();
    reorderedPhotos.push(oldFirst);
    setCrslPhotos(reorderedPhotos);
  }

  return (
    <div className='photo-crsl' onClick={rotate}>
      {crslPhotos.map(photo => (
          <div
            className='photo-crsl__photo'
            style={{backgroundImage: `url(${photo.url})`}}
          ></div>
        ))}
    </div>
  )
};

export default PhotoCarousel;
