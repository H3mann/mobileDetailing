// import people from './people-reducer.js';
 import {combineReducers} from 'redux';
 import authReducer from './authReducer'
 import { routerReducer } from 'react-router-redux';

 const rootReducer = combineReducers({
   authReducer,
   routing: routerReducer
 });
 console.log('ROOT',this)
 
 export default rootReducer;