import React from 'react'
import { Button, FormGroup, ControlLabel, FormControl, Form, HelpBlock, Col} from 'react-bootstrap';

class UserProfile extends React.Component { 

	render () {

		if (this.props.carInfo.car == undefined || this.props.carInfo.car.properties == undefined) {
			return ( <div> <span> You have no registered washes yet! </span> </div>)
		}
			return (
				<div className="UserProfile">
					<h1> User Profile</h1>
					<h2 className='lastWash'>Your Last Wash</h2>
					{
						Object.keys(this.props.carInfo.car.properties).map((k,i) => 
							<div key={i}> {k} : {this.props.carInfo.car.properties[k]} </div>
						) 
					}
				</div>
			)
	}
}
export default UserProfile

// {props.carInfo.car.properties.colour}
// {Object.keys(yourObject).map(function(key) {
//     return <div>Key: {key}, Value: {yourObject[key]}</div>;
// })}







