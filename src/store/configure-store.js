import rootReducer from '../reducers';
 import {createStore, applyMiddleware} from 'redux';
 import carInfo from '../data/state'
 import thunk from 'redux-thunk';
 import auth from '../data/auth'
 import authReducer from '../reducers/authReducer'

 const defaultState = {
 	
 	authReducer
 }
 
 
  const store = createStore(rootReducer,defaultState,applyMiddleware(thunk));

  export default store;
 

 