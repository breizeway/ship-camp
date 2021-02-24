import { Link } from 'react-router-dom';

const SpotCard = ({ spot }) => {
  return (
    <div
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
      <p>{JSON.stringify(spot)}</p>
    </div>
  )
}

export default SpotCard;
