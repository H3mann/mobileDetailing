import React from 'react'
import { Button, FormGroup, ControlLabel, FormControl, Form, HelpBlock, Col, PageHeader } from 'react-bootstrap';

const Signup = React.createClass ({

	getInitialState() {

		return {
			name: '',
			pass: '',
			pass2: '',
			clicked: false
    }
		
	},

	componentWillMount() {
    this.setState({clicked: false});
    // this.props.userReset();
    console.log('PROPS',this.props)
  },

	updateName(event) {
    
		this.setState({
			name: event.target.value
		})
    console.log('updatename',event.target.value)
	},

	updatePass(event) {
		this.setState({
			pass: event.target.value
		})
    console.log('updatename',event.target.value)
	},

	updatePass2(event) {
    this.setState({pass2: event.target.value});
  },

  getValidationUsername() {
    const length = this.state.name.length;
    if (length > 0) return 'success';
    else if (length > 20) return 'warning';
    else if (length <= 0) return 'error';
  },

  getValidationPassword() {
    const length = this.state.pass.length;
    if (length > 0) return 'success';
    else if (length > 20) return 'warning';
    else if (length <= 0) return 'error';
  },

  getValidationPassword2() {
    return (this.state.pass !== '' && this.state.pass === this.state.pass2) ? 'success' : 'error';
  },

  allValid() {
    return !(this.getValidationUsername() === 'success'
      && this.getValidationPassword() === 'success'
      && this.getValidationPassword2() === 'success');
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state.name, this.state.pass);
  },


	render() {
    return (
  <div className='landingPage'>
      <Form horizontal>

        <PageHeader>
          <Col smOffset={2} className='loginTitle'>
            Sign Up <small>need an account?</small>
          </Col>
        </PageHeader>

        <FormGroup
          controlId="usernameTaken"
          validationState={this.props.usernameSuccess === 'true' ? 'success' : 'error'}>
        {!this.props.logSuccess ?
        <Col smOffset={2} sm={2}>
          <HelpBlock>Username is taken.</HelpBlock>
        </Col>
        : null
        }
        </FormGroup>

        <FormGroup
          controlId="formUsername"
          validationState={this.getValidationUsername()}>
          <Col componentClass={ControlLabel} sm={2}>
            Username
          </Col>
          <Col sm={2}>
            <FormControl
              type="text"
              value={this.state.name}
              placeholder="Username"
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
              placeholder="Password"
              onChange={this.updatePass} />
            <FormControl.Feedback />
          </Col>
        </FormGroup>

        <FormGroup
          controlId="formPassword2"
          validationState={this.getValidationPassword2()}>
          <Col smOffset={2} sm={2}>
            <FormControl
              type="password"
              value={this.state.pass2}
              placeholder="Password"
              onChange={this.updatePass2} />
            <FormControl.Feedback />
          </Col>
          {this.getValidationPassword2() !== 'success'?
          <Col sm={2}>
            <HelpBlock>Passwords must match.</HelpBlock>
          </Col>
          : null}
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button disabled={this.allValid()} type="submit" onClick={this.handleSubmit}>
              Sign Up
            </Button>
          </Col>
        </FormGroup>

      </Form>
  </div>
    )
  }

})

export default Signup