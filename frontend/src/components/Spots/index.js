import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import './index.css';
import './index-media.css';

import { getSearchedSpots, getRandomSpots } from '../../store/spots';
import SpotCard from '../SpotCard';
import Map from '../Map';

const Spots = ({ type='searched' }) => {
  const dispatch = useDispatch();

  const queryString = useLocation().search;

  useEffect(() => {
    if (queryString) dispatch(getSearchedSpots(queryString));
    dispatch(getRandomSpots());
  }, [])

  let slice = null;
  switch (type) {
    case 'random':
      slice = 'randomSpots'
      break;
    default:
      slice = 'searchedSpots'
      break;
  }

  const spots = useSelector(state => state.spots[slice]);

  return (
    <div className='spots'>
      <div className='spots__cards-half'>
        {
          spots &&
          spots.map(spot => (
            <SpotCard spot={Object.values(spot)[0]} key={Object.keys(spot)}/>
          ))
        }
      </div>
      {/* <div className='spots__map-half'>
        <Map />
      </div> */}
    </div>
  )
}

export default Spots;
