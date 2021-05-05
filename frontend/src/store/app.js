import { csrfFetch } from './csrf';

const SET_LOCATION = 'users/setLocation';

export const setLocation = location => {
  return {
    type: SET_LOCATION,
    location,
  }
}

const initialState = {
  location: '/',
}

const appReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_LOCATION:
      newState = {...state};
      newState.location = action.location
      return newState
    default:
      return state;
  }
};

export default appReducer;
