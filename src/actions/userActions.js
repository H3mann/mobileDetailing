import axios from 'axios';
import { browserHistory } from 'react-router';

export function login(name, pass) {
	console.log("login", name, pass)
	return function(dispatch) {
		axios.post('/login/', {
			username: name,
			password: pass
		})
		.then(response => {
			dispatch({type: "USER_LOGIN"});
			console.log("userInput request")
			axios.get('/api/inputData',{})
			.then(res => {
				console.log('inside get request',res.data)
				if(res.data === []) {
					browserHistory.push('/')
				} else {
					dispatch({
						type: "GET_INPUTDATA",
						inputData: res.data
					})
					browserHistory.push('/')
				}
			})
			.catch(res => console.log('err in getting userinput', res));
		})
		.catch(response => {
			console.log('error in signinUser action creator: ',response);
			dispatch({type:"LOG_SUCCESS", logSuccess: false});
		});
	}
}



export function signup(name, pass) {
	console.log("signup", name, pass)
	return function(dispatch) {
		axios.post('/signup', {
			username: name,
			password: pass
		})
		.then(function(response) {
			dispatch({type: "USER_LOGIN"})
			browserHistory.push('/')
			console.log('we go make it')

		})
		.catch(function(response) {
			console.log('error in signupUser action creator: ', response);
			dispatch({type: "USERNAME_SUCCESS", usernameSuccess: false});
		});
	}
}




export function logReset() {
	return {type:"LOG_SUCCESS", logSuccess: true}
}

export function userReset() {
	return {type:"USERNAME_SUCCESS", usernameSuccess: true}
}