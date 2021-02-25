import SpotCard from '../SpotCard';
import { useDispatch, useSelector } from 'react-redux';

import './index.css';

const Spots = () => {
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
      <div className='spots__map'></div>
    </div>
  )
}

export default Spots;
