import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import PeopleContainer from './components/PeopleContainer';
import UserInputContainer from './containers/UserInputContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GB Auto Detail</h2>
        </div>
        <p className="App-intro">
          To get started, input your info below!
        </p>
        <UserInputContainer />
      </div>
    );
  }
}

export default App;
