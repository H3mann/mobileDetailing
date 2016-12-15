
import React from 'react';
import UserInput from '../components1/UserInput'

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
	// colour: event.target.value
	// location: event.target.value,
	// time: event.target.value
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

render() {
	return (
<div>
<UserInput 
handleCarChange={this.handleCarChange}
handleColourChange={this.handleColourChange}
handleLocationChange={this.handleLocationChange}
handleTimeChange={this.handleTimeChange}
car={this.state.car}
colour={this.state.colour} 
location={this.state.location}
time={this.state.time} />





</div>

)



}


})

export default UserInputContainer