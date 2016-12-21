import axios from 'axios';
import { browserHistory } from 'react-router';



export function signup(name, pass) {
	console.log("signup", name, pass)
	return function(dispatch) {
		axios.post('/signup', {
			username: name,
			password: pass
		})
		.then(function(response) {
			dispatch({type: "USER_LOGIN"});
			// browserHistory.push('/startmap');
		})
		.catch(function(response) {
			dispatch({type: "USERNAME_SUCCESS", usernameSuccess: false});
			console.log('error in signupUser action creator: ', response);
		});
	}
}




export function userReset() {
	return {type:"USERNAME_SUCCESS", usernameSuccess: true}
}