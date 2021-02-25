import { csrfFetch } from './csrf';

const SET_SEARCHED_SPOTS = 'session/setSearchedSpots';

const setSearchedSpots = spots => {
  return {
    type: SET_SEARCHED_SPOTS,
    payload: spots,
  };
};

export const getSpotsOld = searchData => async dispatch => {
  const { text, date, accom } = searchData;
  const response = await csrfFetch('/api/spots', {
    method: 'POST',
    body: JSON.stringify({
      text,
      date,
      accom
    }),
  });
  const spots = await response.json();
  dispatch(setSearchedSpots(spots));
  return response;
};

export const getSpots = queryString => async dispatch => {
  const response = await csrfFetch(`/api/spots/${queryString}`)
  const spots = await response.json();
  const searchedSpots = await dispatch(setSearchedSpots(spots));
  return searchedSpots.payload.spots;
};

const initialState = {
  spots: null,
}

const spotsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_SEARCHED_SPOTS:
      newState = {...state};
      const { spots } = action.payload;
      const flattenedSpots = spots.map(spot => ({ [spot.id]: spot }))
      newState.searchedSpots = flattenedSpots;
      return newState;
    default:
      return state;
  }
};

export default spotsReducer;
