import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import logo from '../logo.svg';
import '../App.css';

import AuthBar from './authorization/Authbar'
import Signup from './authorization/Signup'

const Main = React.createClass({


 

  render() {
    console.log('this',this.props)
    
    return (
      <div>
      <div className="App">
        <div className="App-header">
          <div className='signup'>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GB Auto Detail</h2>
        </div>
        <p className="App-intro">
          To get started, input your info below!
        </p>
        
      </div>
      <div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    </div>
    )
  }
});

export default Main;
        // <AuthBar changeLogin={this.props.changeLogin} logout={this.props.logout} game={this.props.game}/>
            // <Signup signup={this.props.signup} logSuccess={this.props.auth.usernameSuccess}/>