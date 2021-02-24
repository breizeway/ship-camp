import { csrfFetch } from './csrf';

const SET_SEARCHED_SPOTS = 'session/setSearchedSpots';

const setSearchedSpots = spots => {
  return {
    type: SET_SEARCHED_SPOTS,
    payload: spots,
  };
};

export const getSpots = searchData => async dispatch => {
  const { text, date, accom } = searchData;
  console.log('store/getSpots: before csrfFetch')
  const response = await csrfFetch('/api/spots', {
    method: 'GET',
    body: JSON.stringify({
      text,
      date,
      accom
    }),
  });
  console.log('store/getSpots: after csrfFetch')
  const spots = await response.json();
  dispatch(setSearchedSpots(spots));
  return response;
};

getSpots()

const initialState = {
  spots: null,
}

const spotsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_SEARCHED_SPOTS:
      newState = {...state};
      newState.searchedSpots = action.payload;
      return newState;
    default:
      return state;
  }
};

export default spotsReducer;
