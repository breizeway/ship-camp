import './index.css';

const PhotoCarousel = ({ photos, setPhotos }) => {

  const rotateLeft = () => {
    const reorderedPhotos = [...photos];
    reorderedPhotos.unshift(reorderedPhotos.pop());
    setPhotos(reorderedPhotos);
  }

  const rotateRight = () => {
    const reorderedPhotos = [...photos];
    reorderedPhotos.push(reorderedPhotos.shift());
    setPhotos(reorderedPhotos);
  }

  return (
    <div className='photo-crsl photo-crsl-media'>
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
