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
import SpotBookDetails from './SpotBookDetails';

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
            <SpotFeatureCard
              type={'Campsite area'}
              items={[
                {id: 1, icon: 'shelter', beforeText: spot.shelterIsProvided === true ? 'Shelter: ' : 'Shelter: Bring your own ', desc: spot.ShelterType.description, available: null, afterText: ''},
                {id: 2, icon: 'access', beforeText: 'Access: ', desc: spot.AccessType.description, available: null, afterText: ' required'},
                {id: 3, icon: 'guests', beforeText: 'Up to ', desc: spot.maxGuests, available: null, afterText: ' guests allowed'},
              ]}
            />
            <SpotFeatureCard
              type={'Ammenities'}
              items={
                spot.Amenities.map(amenity => (
                  {id: amenity.id, icon: amenity.description, beforeText: '', desc: amenity.description, available: amenity.SpotAmenity.available, afterText: ''}
                ))
              }
            />
          </div>
          <SpotBookDetails
            checkIn={spot.checkIn}
            checkOut={spot.checkOut}
            cancellationPolicy={spot.CancellationPolicy.description}
            arrivalType={spot.ArrivalType.description}
            minStay={spot.minStay}
            bookingPeriod={spot.bookingPeriod}
          />
        </div>
        <BookForm
          price={spot.price}
          checkIn={spot.checkIn}
          checkOut={spot.checkOut}
          maxGuests={spot.maxGuests}
        />
        {/* <div className='spot-raw'>{JSON.stringify (spot)}</div> */}
      </div>
    </div>
  )
}

export default Spot;
