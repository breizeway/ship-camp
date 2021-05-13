import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './UserTrips.css'
import * as userTripsActions from '../../store/components/user-trips'
import SpotCard from '../SpotCard'
import TripDetails from './TripDetails'
import TripControls from './TripControls'


const UserTrips = ({ trips }) => {
    console.log('   :::TRIPS:::   ', trips);
    const dispatch = useDispatch()
    let { username } = useParams()
    username = username.toLowerCase()

    const rendered = {
        val: useSelector(state => state.components.UserTrips.rendered.has(username)),
        set: () => dispatch(userTripsActions.setRendered(username))
    }

    if (!rendered.val) {
        (async () => {
            rendered.set()
        })()
    }

    return (
        <div className='user-trips'>
            {trips.length ? (
                trips.map((trip, i) => (
                    <div className='user-trip' key={i}>
                        <SpotCard
                            styles={{paddingLeft: '0', paddingRight: '0'}}
                            spot={trip}
                        >
                        </SpotCard>
                        <div className='user-trip__trip'>
                            <TripDetails booking={trip.Booking} price={trip.price}/>
                            <TripControls />
                        </div>
                    </div>
                ))
            ) : (
                <div className='faded-text'>No trips yet. Let's get out there!</div>
            )}
        </div>
    )
}


export default UserTrips
