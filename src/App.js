import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from '../src/components/Main'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from '../src/actions/people-actions';
import * as userActions from '../src/actions/userActions'
import { browserHistory } from 'react-router';

function mapStateToProps(state) {
	// console.log(' AUTH INFO map state to props',state)
	// console.log('CAR INFO INSIDE MAP STATE TO PROPS',state.carInfo)
   return {
     auth: state,
      carInfo: state.carInfo
   };
 }
 
 function mapDispatchToProps(dispatch) {
   return  bindActionCreators({ ...peopleActions,
    ...userActions

   }, dispatch) 
 }
 
 const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App
