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
    <div className='photo-crsl'>
      {photos && photos.map(photo => (
        <div
          key={photo.id}
          className='photo-crsl__photo'
          style={photos && {backgroundImage: `url(${photo.url})`}}
        ></div>
      ))}
      <div className='photo-crsl__button photo-crsl__left-button' onClick={rotateLeft}>
        <i className="fas fa-chevron-left"></i>
      </div>
      <div className='photo-crsl__button photo-crsl__right-button' onClick={rotateRight}>
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  )
};

export default PhotoCarousel;
