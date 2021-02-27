import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './index.css';
import './index-media.css'
import { getSpot } from '../../store/spots';
import PhotoCarousel from '../PhotoCarousel';
import SpotName from './SpotName';
import BookForm from './BookForm';

const Spot = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    dispatch(getSpot(id))
      .then((spot) => setPhotos(spot.Photos))
  }, [])

  const spot = useSelector(state => state.spots.spot);

  return spot && (
    <div className='spot'>
      <PhotoCarousel photos={photos} setPhotos={setPhotos} />
      <div className='spot__content'>
        <div className='spot__details'>
          <SpotName name={spot.name}/>
          <div className='spot__description'>{spot.description}</div>
          <div>spot desc comp goes here</div>
          <div>
            spot features goes here 1
            spot features goes here 2
            spot features goes here 3
          </div>
        </div>
        <BookForm
          price={spot.price}
          checkIn={spot.checkIn}
          checkOut={spot.checkOut}
          maxGuests={spot.maxGuests}
        />
        <div className='spot-raw'>{JSON.stringify (spot)}</div>
      </div>
    </div>
  )
}

export default Spot;
