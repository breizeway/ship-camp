import { csrfFetch } from './csrf';

const SET_SEARCHED_SPOTS = 'session/setSearchedSpots';
const SET_SPOT = 'session/setSpot';

const setSearchedSpots = spots => {
  return {
    type: SET_SEARCHED_SPOTS,
    payload: spots,
  };
};

const setSpot = spot => {
  return {
    type: SET_SPOT,
    payload: spot,
  }
}

export const getSearchedSpots = queryString => async dispatch => {
  const response = await csrfFetch(`/api/spots/${queryString}`);
  const spots = await response.json();
  const searchedSpots = await dispatch(setSearchedSpots(spots));
  return searchedSpots.payload.spots;
};

export const getSpot = id => async dispatch => {
  const response = await csrfFetch(`/api/spots/${id}`);
  const returnedSpot = await response.json();
  const spot = await dispatch(setSpot(returnedSpot));
  return spot.payload.spot;
}

const initialState = {
  searchedSpots: null,
  spot: null
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
    case SET_SPOT:
      newState = {...state};
      const { spot } = action.payload;
      newState.spot = spot;
      return newState;
    default:
      return state;
  }
};

export default spotsReducer;
