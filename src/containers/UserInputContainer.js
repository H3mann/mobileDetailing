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

const UserInputContainer = React.createClass({
  getInitialState () {
    return {
      car: '',
      colour: '',
      location: '',
      time: ''
    };
  },

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

handleSubmit(e) {
e.preventDefault()
console.log('hello')
this.props.postInfo(this.state.car,this.state.colour,this.state.location,this.state.time)

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
handleSubmit={this.handleSubmit}
car={this.state.car}
colour={this.state.colour} 
location={this.state.location}
time={this.state.time}
submit={this.handleSubmit} />





</div>

)



}


})


 
 // PeopleContainer.propTypes = {
 //   people: PropTypes.array.isRequired,
 //   actions: PropTypes.object.isRequired
 // };
 
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
 
 export default connect(mapStateToProps, mapDispatchToProps)(Main);



