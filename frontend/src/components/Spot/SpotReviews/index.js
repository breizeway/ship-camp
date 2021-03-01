import SpotReview from './SpotReview';

import './index.css';

const SpotReviews = ({ reviews }) => {
  return (
    <div className='spot-reviews'>
      <div className='spot-reviews__header'>
        <div className='spot-reviews__num'>{reviews.length} Reviews</div>
        <div className='spot-reveiws__sort'>
          <select>
            <option>Most popular</option>
            <option>Most recent</option>
          </select>
        </div>
      </div>
      <div className='spot-reviews__reviews'>
        {reviews.map(review => (
          <SpotReview review={review} key={review.id} />
        ))}
      </div>
    </div>
  )
}

export default SpotReviews;
