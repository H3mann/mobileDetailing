import React from 'react'
import { Link } from 'react-router'

import { Button, FormGroup, ControlLabel, FormControl, Form, HelpBlock, Col, PageHeader } from 'react-bootstrap';

const Login = React.createClass({

getInitialState() {
	return {
		name: '',
		pass: ''
	} 
},

componentWillMount() {
	this.props.logReset()
},

updateName(event) {
	this.setState({name: event.target.value})
console.log('username',event.target.value)
},

updatePass(event) {
	this.setState({pass: event.target.value})
	console.log('pass',event.target.value)
},

getValidationUsername() {
	const length = this.state.name.length;
	if (length > 0) return 'success';
	else if (length>20) return 'warning'
	else if (length <=0) return 'error'
},

getValidationPassword() {
    const length = this.state.pass.length;
    if (length > 0) return 'success';
    else if (length > 20) return 'warning';
    else if (length <= 0) return 'error';
  },

allValid () {
	return !(this.getValidationUsername() === 'success' 
		&& this.getValidationPassword === 'success')
},

handleSubmit(e) {
	e.preventDefault()
	this.props.login(this.state.name, this.state.pass)
},


render() {
	return (
<div className="LandingPage">

	<Form horizontal>

		<PageHeader className='PageHeader'>
			<Col smOffset={2} className='loginTitle'>
				<h2>Welcome to GB Auto Detail! </h2>
			</Col>
		</PageHeader>

		<FormGroup 
		controlId='wrongPass'
		validationState={this.props.logSuccess === 'true' ? 'success' : 'error'}>
		{!this.props.logSuccess ?
		<Col smOffset={2} sm={2}>
			<HelpBlock>Wrong username or password</HelpBlock>
		</Col>
		:null
		}
		</FormGroup>

		<FormGroup
		controlId='formUsername'
		validationState={this.getValidationUsername()}>
		<Col componentClass={ControlLabel} sm={2}>
			username
		</Col>

		<Col sm={2}>
			<FormControl
				type="text"
				value={this.state.name}
				placeholder='Enter Username'
				onChange={this.updateName} />
			<FormControl.Feedback />
			</Col>
		</FormGroup>

		<FormGroup
          controlId="formPassword"
          validationState={this.getValidationPassword()}>
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={2}>
            <FormControl
              type="password"
              value={this.state.pass}
              placeholder="Enter your password"
              onChange={this.updatePass} />
            <FormControl.Feedback />
          </Col>
        </FormGroup>

        <FormGroup>
        <Col smOffset={2} xs={2}>
        <Button type='submit' onClick={this.handleSubmit}>
        Login</Button>
        </Col>
        </FormGroup>
   </Form>

	</div>
	)

}

})

export default Login;