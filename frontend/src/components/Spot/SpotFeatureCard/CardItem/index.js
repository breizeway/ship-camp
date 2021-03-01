import './index.css';

const CardItem = ({ item }) => {

  const available = (() => {
    switch (item.available) {
      case (true): return ' available';
      case (false): return ' not available';
      default: return '';
    }
  })()

  const iconClass = (() => {
    switch (item.icon) {
      case ('shelter'): return 'fas fa-house-user';
      case ('access'): return 'fas fa-shuttle-van';
      case ('guests'): return 'fas fa-users';
      case ('Potable water'): return 'fas fa-faucet';
      case ('Kitchen'): return 'fas fa-sink';
      case ('Showers'): return 'fas fa-shower';
      case ('Picnic table'): return 'fas fa-shopping-basket';
      case ('Wifi'): return 'fas fa-wifi';
      case ('Bins'): return 'fas fa-trash-alt';
      case ('Toilet'): return 'fas fa-toilet';
      case ('Laundry'): return 'fas fa-soap';
      case ('Storage'): return 'fas fa-archive';
      default: return 'far fa-question-circle';
    }
  })()

  return (
    <div className='card-item'>
      <div className='card-item__icon'>
        <i className={iconClass}/>
      </div>
      <div>
        {`${item.beforeText}${item.desc}${available}${item.afterText}`}
      </div>
    </div>
  )
}

export default CardItem;
