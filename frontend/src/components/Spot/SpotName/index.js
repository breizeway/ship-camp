import './index.css';

const SpotName = ({ name, reviews }) => {
  const recommended = (() => {
    const rec = reviews.filter(review => review.recommended === true).length;
    console.log('   :::REC:::   ', rec);
    return Math.floor(rec / reviews.length * 100);
  })()

  return (
    <div className='spot-name'>
      <div className='spot-name__name'>{name}</div>
      <div className='spot-name__recommended'>
        <div className='spot-name__recommended-icon'>
          <i className='fas fa-thumbs-up' />
        </div>
        <div className='spot-name__recommended-percent'>{recommended}%</div>
        <div className='spot-name__recommended-text'>Reccomend</div>
      </div>
    </div>
  )
};

export default SpotName;
