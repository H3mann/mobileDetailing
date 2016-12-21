import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import PeopleContainer from './components/PeopleContainer';

import Main from '../src/components/Main'

 import {connect} from 'react-redux';
 import {bindActionCreators} from 'redux';
 import * as peopleActions from '../src/actions/people-actions';
 import * as userActions from '../src/actions/userActions'
 import { browserHistory } from 'react-router';




function mapStateToProps(state) {
   return {
     carInfo: state.carInfo,
     auth: state.auth
   };
 }
 
 function mapDispatchToProps(dispatch) {
   return  bindActionCreators({ ...peopleActions,
    ...userActions

   }, dispatch) 
 }
 
 const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App
