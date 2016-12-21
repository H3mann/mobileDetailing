import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import AuthBar from './Authorization/Authbar'

const Main = React.createClass({

  onRouteChange(loc) {
    if(loc.pathname !== '/' && !this.props.game.logged) {
      this.props.isUserAuth();
    }
    if(loc.pathname == '/' && this.props.game.logged) {
      
    }
  },

 

  render() {
    browserHistory.listen(this.onRouteChange)
    return (
      <div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
        // <AuthBar changeLogin={this.props.changeLogin} logout={this.props.logout} game={this.props.game}/>