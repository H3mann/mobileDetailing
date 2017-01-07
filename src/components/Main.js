import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import logo from '../logo.svg';
import '../App.css';
import AuthBar from './authorization/Authbar'
import Signup from './authorization/Signup'
import { Button, FormGroup, ControlLabel, FormControl, Form, HelpBlock, Col} from 'react-bootstrap';


const Main = React.createClass({

  componentWillMount() {
    console.log('im here!!!')
  },

  render() {
    console.log('this',this.props)

    return (
      <div>
        <div className="App">
          <div className="App-header">
            <div className='signup'>
                {this.props.auth.logged ? <span className='Welcome'>Welcome!</span> 
                  :<div className='authLinks'> 
                    <Col sm={1}>
                      <Link to={'/login'} > Login </Link>
                      <Link to={'/signup'}> Signup </Link>
                    </Col>
                  </div> 
                }
            </div>
            <div className='title'>
            <h1>GB Auto Detail </h1>
              
            </div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className='below'>
          <p className="App-intro">
           
          </p>

        </div>
          <div>
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </div>
      </div>
    )
  }
});

export default Main;
