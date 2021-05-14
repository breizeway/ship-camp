import React from 'react'

import './TripDetails.css'


const TripDetails = ({ booking }) => {
    console.log('   :::BOOKING:::   ', booking);
    const startDate = new Date(booking.startDate)
    const endDate = new Date(booking.endDate)
    const startString = startDate.toDateString()
    const endString = endDate.toDateString()
    const days = (endDate - startDate)/360/24/10000

    return (
        <div className='trip-details'>
            <div className='trip-details__header'>Stay:</div>
            <div>{`${startString} to ${endString} (${days} days)`}</div>
            <div className='trip-details__header'>Guests:</div>
            <div>{booking.guests}</div>
            <div className='trip-details__header'>Total Paid:</div>
            <div>{`$${booking.Spot.price * days}`}</div>
        </div>
    )
}


export default TripDetails
