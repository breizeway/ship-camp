import Spot from '..';
import './index.css';

const SpotBookDetails = ({
  checkIn,
  checkOut,
  cancellationPolicy,
  arrivalType,
  minStay,
  bookingPeriod
}) => {
  const hour = (time) => {
    if (time === 0) return '12 AM';
    else if (time === 12) return `${time} PM`;
    else if (time > 12) return `${time - 12} PM`;
    else return `${time} AM`
  }

  const checkInText = hour(checkIn);
  const checkOutText = hour(checkOut);

  return (
    <div className='spot-book-details'>
      <div className='spot-book-details__header'>Details</div>
      <div className='spot-book-details__details'>
        <div className='spot-book-details__details-column'>
          <div className='spot-book-details__details-item'>
            <div className='spot-book-details__details-item-header'>
              Check in:&nbsp;
            </div>
            <div className='spot-book-details__details-item-text'>
              {`After ${checkInText}`}
            </div>
          </div>
          <div className='spot-book-details__details-item'>
            <div className='spot-book-details__details-item-header'>
              Check out:&nbsp;
            </div>
            <div className='spot-book-details__details-item-text'>
              {`Before ${checkOutText}`}
            </div>
          </div>
          <div className='spot-book-details__details-item'>
            <div className='spot-book-details__details-item-header'>
              Cancellation policy:&nbsp;
            </div>
            <div className='spot-book-details__details-item-text'>
              {cancellationPolicy}
            </div>
          </div>
        </div>
        <div className='spot-book-details__details-column'>
          <div className='spot-book-details__details-item'>
            <div className='spot-book-details__details-item-header'>
              On arrival:&nbsp;
            </div>
            <div className='spot-book-details__details-item-text'>
              {arrivalType}
            </div>
          </div>
          <div className='spot-book-details__details-item'>
            <div className='spot-book-details__details-item-header'>
              Minimum stay:&nbsp;
            </div>
            <div className='spot-book-details__details-item-text'>
              {`${minStay} ${minStay === 1 ? 'night' : 'nights'}`}
            </div>
          </div>
          <div className='spot-book-details__details-item'>
            <div className='spot-book-details__details-item-header'>
              Accepts bookings:&nbsp;
            </div>
            <div className='spot-book-details__details-item-text'>
              {`${bookingPeriod} ${bookingPeriod === 1 ? 'month' : 'months'} out`}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpotBookDetails;
