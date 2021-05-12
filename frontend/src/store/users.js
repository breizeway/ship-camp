import { csrfFetch } from './csrf';

const SET_USER = 'users/setUser';

const setUser = user => {
  return {
    type: SET_USER,
    user,
  }
}

export const runSetUser = username => async dispatch => {
  try {
    const response = await csrfFetch('/api/users', {
      method: 'PUT',
      body: JSON.stringify({
        username,
      }),
    });
    const { user } = await response.json();
    dispatch(setUser(user));

  } catch(e) {
    console.log('   :::E:::   ', e);
  }
};

const initialState = {
  all: {},
}

const usersReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = {...state};
      newState.all[action.user.username] = action.user
      return newState
    default:
      return state;
  }
};

export default usersReducer;
