import { combineReducers} from 'redux';

import userReducer from './user';
import userTripsReducer from './user-trips';


const componentReducer = combineReducers({
    User: userReducer,
    UserTrips: userTripsReducer,
});

export default componentReducer
