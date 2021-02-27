import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import './index.css';
import './media-wide.css';

import { getSearchedSpots } from '../../store/spots';
import SpotCard from '../SpotCard';
import Map from '../Map';

const Spots = () => {
  const dispatch = useDispatch();

  const queryString = useLocation().search;

  useEffect(() => {
    dispatch(getSearchedSpots(queryString));
  }, [])

  const spots = useSelector(state => state.spots.searchedSpots);

  return (
    <div className='spots'>
      <div className='spot__cards'>
        {
          spots &&
          spots.map(spot => (
            <SpotCard spot={Object.values(spot)[0]} key={Object.keys(spot)}/>
          ))
        }
      </div>
      <Map />
    </div>
  )
}

export default Spots;
