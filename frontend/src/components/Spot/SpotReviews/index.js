import { useState } from 'react'
import { useSelector } from 'react-redux'
import SpotReview from './SpotReview';

import './index.css';
import ReviewAdd from './ReviewAdd'

const SpotReviews = ({ reviews }) => {

  reviews.sort((a, b) => {
    const dateA = new Date(a.createdAt)
    const dateB = new Date(b.createdAt)
    return dateB - dateA
  })
  const [editMode, setEditMode] = useState(false)

  const loggedInUser = useSelector(state => state.session.user)

  return (
    <div className='spot-reviews'>
      <div className='spot-reviews__header'>
        <div className='spot-reviews__num'>{reviews.length} Reviews</div>
        {loggedInUser && (
          <div className='spot-reviews__add' onClick={() => setEditMode(true)}>Add Review</div>
        )}
      </div>
      <div className='spot-reviews__reviews'>
        {editMode && (
          <ReviewAdd setEditMode={setEditMode}/>
        )}
        {reviews.map(review => (
          <SpotReview review={review} key={review.id} />
        ))}
      </div>
    </div>
  )
}

export default SpotReviews;
