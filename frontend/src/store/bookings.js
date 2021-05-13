const SET_BOOKING = 'bookings/setBooking'
const SET_USER_BOOKINGS = 'bookings/setUserBookings'

const setBooking = booking  => {
    return {
        type: SET_BOOKING,
        booking,
    }
}

const setUserBookings = bookings => {
    return {
        type: SET_USER_BOOKINGS,
        bookings,
    }
}

export const runSetUserBookings = userId => async dispatch => {
    const response = await csrfFetch(`/api/user/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, spotId, startDate, endDate, guests })
    });
    const booking = await response.json();
    dispatch(setUserBookings(booking))
    return booking
}
}

export const bookSpot = (userId, spotId, startDate, endDate, guests) => async dispatch => {
    const response = await csrfFetch(`/api/spots/book`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, spotId, startDate, endDate, guests })
    });
    const booking = await response.json();
    dispatch(setBooking(booking))
    return booking
}

const defaultState = {
    user: {},
    spot: {},
}

const bookingsReducer = (state = defaultState, action) => {
    let newState
    let username
    let spotId
    switch (action.type) {
        case SET_BOOKING:
            newState = {...state}
            username = action.booking.username
            spotId = action.booking.spotId

            if (newState.user[username]) {
                newState.user[username].push(action.booking)
            }
            else {
                newState.user[username] = [action.booking]
            }

            if (newState.user[spotId]) {
                newState.user[spotId].push(action.booking)
            }
            else {
                newState.user[spotId] = [action.booking]
            }

            newState.user[action.booking.userId]
            return newState
        default:
            return state;
    }
}


export default bookingsReducer
