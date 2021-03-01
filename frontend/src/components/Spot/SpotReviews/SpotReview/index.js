import './index.css';

const SpotReview = ({ review }) => {
  const reviewDate = new Date(review.createdAt).toString().split(' ').slice(0, 4).join(' ');

  return (
    <div className='spot-review'>
      <div className='spot-review__profile-image-container'>
        <div
          className='spot-review__profile-image'
          style={{
            backgroundImage: `url(${review.Reviewer.profileImageUrl})`
          }}
        />
      </div>
      <div className='spot-review__content'>
        <div className='spot-review__content-about'>
          <div className='spot-review__content-about-host'>
            <div className='spot-review__content-about-icon'>
              {review.recommended === true ? <i className='fas fa-thumbs-up' style={{paddingBottom: '1px'}}/> : <i className='fas fa-thumbs-down' style={{paddingTop: '2px'}}/>}
            </div>
            <div className='spot-review__content-about-name'>{`${review.Reviewer.firstName} ${review.Reviewer.lastName[0]}.`}</div>
            <div className='spot-review__content-about-text'>&nbsp;recommends this listing.</div>
          </div>
          <div className='spot-review__content-about-date'>{reviewDate}</div>
        </div>
        <div className='spot-review__content-review'>{review.text}</div>
      </div>
    </div>
  )
}

export default SpotReview;
