import React from 'react'


const UserProfile = (props) => (
	<div>
		<h2>Your Last Wash</h2>
		<div>
			{Object.keys(props.carInfo.car.properties).map((k,i) => 
				<div key={i}> {k} : {props.carInfo.car.properties[k]} </div>
			)}
		</div>
	</div>


)

export default UserProfile

// {props.carInfo.car.properties.colour}
// {Object.keys(yourObject).map(function(key) {
//     return <div>Key: {key}, Value: {yourObject[key]}</div>;
// })}







