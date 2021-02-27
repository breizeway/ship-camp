import { csrfFetch } from './csrf';

const SET_GOOGLE_MAPS = 'session/setGoogleMaps';

const setGoogleMaps = keys => {
  return {
    type: SET_GOOGLE_MAPS,
    payload: keys,
  }
}

export const getGoogleMaps = () => async dispatch => {
  const response = await csrfFetch('/api/google-maps-vars')
  const resParsed = await response.json();
  const keys = await dispatch(setGoogleMaps(resParsed));
  return keys.payload;
}

const initialState = {
  googleMaps: null,
}

const apiKeysReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_GOOGLE_MAPS:
      newState = {...state};
      newState.googleMaps = action.payload;
      return newState;
    default:
      return state;
  }
};

export default apiKeysReducer;
