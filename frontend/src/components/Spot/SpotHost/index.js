import React from 'react'
import { useHistory } from 'react-router-dom'
import './index.css';

const SpotHost = ({ host }) => {
  console.log('   :::HOST:::   ', host);
  const history = useHistory()

  return (
    <div className='spot-host' onClick={() => history.push(`/u/${host.username}`)}>
      <div className='spot-host__photo' style={{backgroundImage: `url(${host.profileImageUrl})`}}/>
      <div className='spot-host__text'>
        <div className='spot-host__text-host-by'>Hosted by</div>
        <div className='spot-host__text-host-bame'>
          {`${host.firstName} ${host.lastName[0]}.`}
        </div>
      </div>
    </div>
  )
}

export default SpotHost;
