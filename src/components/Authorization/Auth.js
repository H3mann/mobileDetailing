import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Login from './Login'
import Signup from './Signup'

const Auth = React.createClass({

  componentWillMount() {
    // this.props.isUserAuth(true);
    console.log('okayy!')
  },

  render() {
    return (
      <div className='auth noSelect'>
          <Signup signup={this.props.signup} logSuccess={this.props.auth.usernameSuccess} userReset={this.props.userReset}/>
      </div>
    )
  }
});

export default Auth;
