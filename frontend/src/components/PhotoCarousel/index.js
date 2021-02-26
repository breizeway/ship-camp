import { useEffect, useState } from 'react';

import './index.css';

const PhotoCarousel = ({ photos }) => {

  const [crslPhotos, setCrslPhotos] = useState(photos);

  useEffect(() => {
    setCrslPhotos([...photos]);
  }, [])

  // const rotateLeft = () => {
  //   const reorderedPhotos = [...crslPhotos];
  //   reorderedPhotos.unshift(reorderedPhotos.pop());
  //   setCrslPhotos(reorderedPhotos);
  // }

  const rotateLeft = () => {
    const photos = document.querySelectorAll('.photo-crsl__photo');
    const lastIndex = photos.length - 1;
    console.log('   :::LASTINDEX:::   ', lastIndex);
    const lastImageUrl = photos[lastIndex].style.backgroundImage;
    for (let i = lastIndex; i >= 0; i--) {
      if (i === 0) {
        photos[i].style.backgroundImage = lastImageUrl;
      } else {
        photos[i].style.backgroundImage = photos[i - 1].style.backgroundImage;
      }

    }
  }

  const rotateRight = () => {
    const photos = document.querySelectorAll('.photo-crsl__photo');
    const firstImageUrl = photos[0].style.backgroundImage;
    for (let i = 0; i < photos.length; i++) {
      if (i === photos.length - 1) {
        photos[i].style.backgroundImage = firstImageUrl;
      } else {
        photos[i].style.backgroundImage = photos[i + 1].style.backgroundImage;
      }

    }
  }

  // const rotateRight = () => {
  //   const reorderedPhotos = [...crslPhotos];
  //   reorderedPhotos.push(reorderedPhotos.shift());
  //   setCrslPhotos(reorderedPhotos);
  // }

  return (
    <div className='photo-crsl'>
      {photos && photos.map(photo => (
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
