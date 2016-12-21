import rootReducer from '../reducers/index';
 import {createStore, applyMiddleware} from 'redux';
 import carInfo from '../data/state'
 import thunk from 'redux-thunk';
 import auth from '../data/auth'
 import authReducer from '../reducers/authReducer'

 const defaultState = {
 	
 	auth
 	
 }
 
 
  const store = createStore(authReducer,defaultState,applyMiddleware(thunk));

  export default store;
 

 