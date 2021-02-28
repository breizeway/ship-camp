import './index.css';

const SpotHost = ({ firstName, lastName, profileImageUrl}) => {
  return (
    <div className='spot-host'>
      <div className='spot-host__photo' style={{backgroundImage: `url(${profileImageUrl})`}}/>
      <div className='spot-host__text'>
        <div className='spot-host__text-host-by'>Hosted by</div>
        <div className='spot-host__text-host-bame'>
          {`${firstName} ${lastName[0]}.`}
        </div>
      </div>
    </div>
  )
}

export default SpotHost;
