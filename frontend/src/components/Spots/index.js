import SpotCard from '../SpotCard';
import { useDispatch, useSelector } from 'react-redux';

import './index.css';

const Spots = () => {
  const spots = useSelector(state => state.spots.searchedSpots);

  return (
    <div className='spots'>
      {
        spots &&
        spots.map(spot => (
          <SpotCard spot={spot} key={Object.keys(spot)}/>
        ))
      }
    </div>
  )
}

export default Spots;
