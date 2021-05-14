import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './TripControls.css'
import { cancelBooking } from '../../../store/bookings'
import * as userDataActions from '../../../store/users'


const TripControls = ({ booking }) => {
    const dispatch = useDispatch()
    let { username } = useParams()
    username = username.toLowerCase()

    const startDate = new Date(booking.startDate)
    const today = new Date()

    const loggedInUser = useSelector(state => state.session.user)

    const bookingIsEditable = (today <= startDate) && (loggedInUser?.username === username)

    const submit = async e => {
        e.preventDefault()
        const confirmed = window.confirm('Are you sure you want to cancel this booking? You cannot reverse this action.')
        if (confirmed) await dispatch(cancelBooking(booking.id))
        dispatch(userDataActions.runSetUser(username))
    }

    return (
        <div className='trip-controls'>
            {bookingIsEditable && (
                <form onSubmit={submit}>
                    <div>
                        <button type='submit' className='button-cancel'>Cancel Trip</button>
                    </div>
                </form>
            )}
        </div>
    )
}


export default TripControls
