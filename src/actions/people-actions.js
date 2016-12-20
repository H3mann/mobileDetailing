import * as types from './action-types';
 
 // export const addPerson = (person) => {
 //   return {
 //     type: types.ADD_PERSON,
 //     person
 //   };
 // }

 import axios from 'axios';
import { browserHistory } from 'react-router';

export function postInfo(car,colour,location,time) {
	var car = car
	console.log('hello!!! inside postinfo', car,colour,location,time)
	return function (dispatch) {
console.log('yo')
		axios.post('api/carInput', {
		car: car,
		colour: colour,
		location: location,
		time: time
		})
		.then(response => {
		console.log('postInfo response',response.data)
		})
		.catch (response => {
		console.error('error in makeCharacter action creator: ',response);
		})
	}
}





