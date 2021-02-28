import './index.css';

const SpotFeatureCard = ({ type }) => {
  return (
    <div className='spot-feature-card'>
      <div className='spot-feature-card__type'>{type}</div>
      <div>feature-1</div>
      <div>feature-2</div>
      <div>feature-3</div>
      <div>feature-4</div>
      <div>feature-5</div>
      <div>feature-6</div>
      <div>feature-7</div>
    </div>
  )
}

export default SpotFeatureCard;
