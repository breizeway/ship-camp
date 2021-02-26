import './index.css';

const SpotName = ({ name }) => {
  return (
    <div className='spot-name'>
      <div className='spot-name__name'>{name}</div>
    </div>
  )
};

export default SpotName;
