import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './UserTrips.css'
import * as userTripsActions from '../../store/components/user-trips'
// import * as bookindsDataActions from '../../store/components/bookings'


const UserTrips = () => {
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
            UserTrips
        </div>
    )
}


export default UserTrips
