import { Link } from 'react-router-dom';

const SpotCard = ({ spot }) => {
  console.log('   :::SPOT:::   ', spot);
  return (
    <div>
      <Link
        to={`spots/${Object.keys(spot)}`}
        style={{
          borderRadius: '10px',
          backgroundColor: 'teal',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '200px',
          width: '200px',
        }}
      >
        <p>{Object.values(spot)[0].name}</p>
      </Link>
    </div>
  )
}

export default SpotCard;
