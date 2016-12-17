import rootReducer from '../reducers';
 import {createStore, applyMiddleware} from 'redux';
 import carInfo from '../data/state'
 import thunk from 'redux-thunk';

 const defaultState = {
 	carInfo
 }
 
 
  const store = createStore(rootReducer,defaultState,applyMiddleware(thunk));

  export default store;
 

 