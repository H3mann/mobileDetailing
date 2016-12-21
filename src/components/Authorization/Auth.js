import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import LogIn from './Login'
import SignUp from './SignUp'

const Auth = React.createClass({

  componentWillMount() {
    this.props.isUserAuth(true);
  },

  render() {
    return (
      <div className='auth noSelect'>
        {
          this.props.game.login ?
          <LogIn login={this.props.login} logSuccess={this.props.game.logSuccess} logReset={this.props.logReset}/> :
          <SignUp signup={this.props.signup} logSuccess={this.props.game.usernameSuccess} userReset={this.props.userReset}/>
        }
      </div>
    )
  }
});

export default Auth;
