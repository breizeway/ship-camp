import { combineReducers} from 'redux';

import userReducer from './user';


const componentReducer = combineReducers({
    User: userReducer,
});

export default componentReducer
