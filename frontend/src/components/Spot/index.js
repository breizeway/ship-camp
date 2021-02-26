import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './index.css';
import { getSpot } from '../../store/spots';
import PhotoCarousel from '../PhotoCarousel';

const Spot = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSpot(id))
  }, [])

  const spot = useSelector(state => state.spots.spot);

  return (
    <div className='spot'>
      {
        spot &&
        <PhotoCarousel photos={spot.Photos} />
      }
      <p>{JSON.stringify(spot)}</p>
    </div>
  )
}

export default Spot;
