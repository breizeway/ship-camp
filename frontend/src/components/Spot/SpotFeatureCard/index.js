import CardItem from './CardItem';

import './index.css';

const SpotFeatureCard = ({ type,  items }) => {
  return (
    <div className='spot-feature-card'>
      <div className='spot-feature-card__type'>{type}</div>
      <div className='spot-feature-card__items'>
        {items.slice(0, 7).map(item => (
          <CardItem item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default SpotFeatureCard;
