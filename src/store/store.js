import authReducer from "./auth.reducer";
import {createStore} from 'redux';
const store = new createStore(authReducer)
export default store;