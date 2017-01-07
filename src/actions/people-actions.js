import * as types from './action-types';
import axios from 'axios';
import { browserHistory } from 'react-router';

export function postInfo(car,colour,location,time,date) {
	
	console.log('hello!!! inside postinfo', car,colour,location,time,date)
	return function (dispatch) {

		axios.post('api/carInput', {
			car: car,
			colour: colour,
			location: location,
			time: time,
			date: date
		})
		.then(response => {
		console.log('postInfo response',response.data)
		})
		.catch (response => {
		console.error('error in makeCharacter action creator: ',response);
		})
	}
}

export function textInfo (car,colour,location,time,date) {

	return function (dispatch) {

		axios.post('/api/textInfo', {
			car: car,
			colour: colour,
			location: location,
			time: time,
			date: date
		})
		.then (response => {
			console.log('textInfo response', response.data)
		})
		.catch (response => {
			console.error('error in textInfo response',response)
		})
	}
}




