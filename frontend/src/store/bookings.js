import { csrfFetch } from './csrf';

export const cancelBooking = bookingId => async dispatch => {
    const response = await csrfFetch(`/api/spots/book`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ bookingId })
    });
    const booking = await response.json();
    return booking
}

const defaultState = {}

const bookingsReducer = (state = defaultState, action) => {
    let newState
    switch (action.type) {
        default:
            return state;
    }
}


export default bookingsReducer
