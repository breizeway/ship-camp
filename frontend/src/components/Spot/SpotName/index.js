import './index.css';

const SpotName = ({ name }) => {
  return (
    <div className='spot-name'>
      <div className='spot-name__name'>{name}</div>
      <div className='spot-name__recommended'>
        <div className='spot-name__recommended-icon'>
          <i className='fas fa-thumbs-up' />
        </div>
        <div className='spot-name__recommended-percent'>100%</div>
        <div className='spot-name__recommended-text'>Reccomend</div>
      </div>
    </div>
  )
};

export default SpotName;
