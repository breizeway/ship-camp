import './index.css';

const SpotDescription = ({ description }) => {
  return (
    <div className='spot-description'>
      <div className='spot-description__text'>{description}</div>
    </div>
  )
}

export default SpotDescription;
