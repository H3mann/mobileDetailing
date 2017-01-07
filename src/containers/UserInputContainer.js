import React, {PropTypes, Component} from 'react';
 import {connect} from 'react-redux';
 import {bindActionCreators} from 'redux';
 import * as peopleActions from '../actions/people-actions';
 import * as userActions from '../actions/userActions'
 import { browserHistory } from 'react-router';
 // import PeopleList from './PeopleList';
 // import PersonInput from './PersonInput';
 import Main from '../components/Main'
 import UserInput from '../components/UserInput'
 import UserProfile from '../components/UserProfile'
 import UserProfileContainer from './UserProfileContainer'
 import Calendar from '../components/Calendar'
 import DatePicker from 'react-datepicker';
import moment from 'moment';
require('react-datepicker/dist/react-datepicker.css');
import Stripe from '../components/Stripe'
import { Button } from 'react-bootstrap'


const UserInputContainer = React.createClass({
  getInitialState () {
    return {
      car: '',
      colour: '',
      location: '',
      time: '',
      startDate: moment()
    };
  },

  // componentWillMount() {
  //   console.log('this.props in userinput',this.props)
  // },

  handleCarChange(event) {

  this.setState({
    car: event.target.value
  })

  },

  handleColourChange(event) {
    this.setState({
      colour: event.target.value
    })
    console.log(event.target.value)
  },

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    })
  },

  handleTimeChange(event) {
    this.setState({
      time: event.target.value
    })
  },

  handleChange(date) {
    this.setState({
      startDate: date
    })
    console.log('handleChange',this.state.startDate)

  },

  handleSubmit(e) {
  e.preventDefault()
  console.log('INSIDE HANDLESUBMIT',this.props)
  this.props.postInfo(this.state.car,this.state.colour,this.state.location,this.state.time,this.state.startDate._d)
  this.props.textInfo(this.state.car,this.state.colour,this.state.location,this.state.time,this.state.startDate._d)
  },


  render() {
    return (
    <div>
        <UserInput 
        {...this.props}
        handleCarChange={this.handleCarChange}
        handleColourChange={this.handleColourChange}
        handleLocationChange={this.handleLocationChange}
        handleTimeChange={this.handleTimeChange}
        handleCalendarChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        car={this.state.car}
        colour={this.state.colour} 
        location={this.state.location}
        time={this.state.time}
        date={this.state.startDate}
         />
         <h3 style={{fontFamily: 'Raleway', marginLeft: 30, marginTop: 3, fontSize: 15, float: 'left'}}>Date</h3>
      <div style={{marginLeft: 60, float: 'left'}}>

        <DatePicker {...this.props} 
        selected={this.state.startDate} 
        onChange={this.handleChange}
        popoverAttachment="bottom center"
        popoverTargetAttachment="top center"
        popoverTargetOffset="0px 0px" />
      </div>

      <Button bsStyle="success" style={{marginRight:800, marginTop: 20}}className='submitBtn' type='submit' onClick={this.handleSubmit}>
            Submit</Button>

      <div>
        <Stripe {...this.props} token={this.props.token} />
      </div>
      <div className='profileBlurb'>
        { this.props.auth.logged ? <UserProfileContainer {...this.props} /> : <div><h3>login to see your profile here</h3> </div> }
      </div>
    </div>
    )
  }
})


export default UserInputContainer

