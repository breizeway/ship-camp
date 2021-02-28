import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './index.css';
import './index-media.css'
import { getSpot } from '../../store/spots';
import PhotoCarousel from '../PhotoCarousel';
import BookForm from './BookForm';
import SpotName from './SpotName';
import SpotDescription from './SpotDescription';
import SpotHost from './SpotHost';
import SpotFeatureCard from './SpotFeatureCard';

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
          <div className='spot__host-desc'>
            <SpotHost
              firstName={spot.Host.firstName}
              lastName={spot.Host.lastName}
              profileImageUrl={spot.Host.profileImageUrl}
            />
            <SpotDescription description={spot.description} />
          </div>
          <div className='spot__feature-cards'>
            <SpotFeatureCard type={'Campsite area'}/>
            <SpotFeatureCard type={'Essentials'} />
            <SpotFeatureCard type={'Ammenities'} />
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
