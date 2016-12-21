import React from 'react';
import { Link } from 'react-router';
import { Button, ButtonToolbar, Navbar, Nav, NavItem } from 'react-bootstrap';
import { browserHistory } from 'react-router'

const AuthBar = React.createClass({
  render() {
    return (
      <Navbar fluid inverse className='noSelect'>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Cyber Mimes</a>
          </Navbar.Brand>
          <Navbar.Brand>
            <a href="/Leaderboard">Leaderboard</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {
          !this.props.game.logged ?
          <Nav>
            <NavItem eventKey={1} href="#" onClick={() => {this.props.changeLogin(true); browserHistory.push('/')}}>Login</NavItem>
            <NavItem eventKey={2} href="#" onClick={() => {this.props.changeLogin(false); browserHistory.push('/')}}>Sign Up</NavItem>
          </Nav>
          :
          <Nav>
            <NavItem eventKey={3} href="#" onClick={this.props.logout}>Logout</NavItem>
          </Nav>
          }
        </Navbar.Collapse>
      </Navbar>
    )
  }
});

export default AuthBar;