import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './index.css';
import { getSpot } from '../../store/spots';
import PhotoCarousel from '../PhotoCarousel';

const Spot = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    dispatch(getSpot(id))
      .then((spot) => setPhotos(spot.Photos))
  }, [])

  const spot = useSelector(state => state.spots.spot);

  // setPhotos(spot?.Photos)

  return (
    <div className='spot'>
      {
        spot &&
        <PhotoCarousel photos={photos} setPhotos={setPhotos} />
      }
      <p>{JSON.stringify(spot)}</p>
    </div>
  )
}

export default Spot;
