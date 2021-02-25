import { Link } from 'react-router-dom';

import './index.css';

const SpotCard = ({ spot }) => {
  console.log('   :::SPOT:::   ', spot);

  return (
    <div className='spot-card'>
      <div className='spot-card__main'>
        <Link
          to={`spots/${spot.id}`}
          className='spot-card__link'
        >
          <div
            className='spot-card__image'
            style={{
              backgroundImage: `url('${spot.Photos[0].url}')`
            }}
          ></div>
          <div className='spot-card__details'>
            <div className='spot-card__name-div'>
              <div className='spot-card__name'>{spot.name}</div>
            </div>
            <div className='spot-card__reviews-div'>
              <div className='spot-card__reviews'>10 Reviews</div>
            </div>
            <div className='spot-card__price-host-div'>
              <div className='spot-card__host'>
                <p>{`Hosted by ${spot.Host.firstName}`}</p>
              </div>
              <div className='spot-card__price'>
                <p>{`$${spot.price}`}</p>
                <p>{`/NIGHT`}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SpotCard;
