import React from 'react'
import UserProfile from '../components/UserProfile'

class userProfileContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	// componentWillMount() {
	// 	console.log('this.propsin user profile container',this.props.carInfo.car.properties.colour)
	// }

	render() {
		return (
			<div>
				<UserProfile {...this.props} />
			</div>
		)
	}
}

export default userProfileContainer