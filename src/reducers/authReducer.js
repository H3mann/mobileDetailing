


const authReducer = (state = [] ,action) => {

	// let newState = JSON.parse(JSON.stringify(state))
	// console.log('new state',newState)

	switch (action.type) {
		case 'USER_LOGIN':
		return {...state,logged: true}


		case 'USER_LOGOUT':
		return {...state, logged: false}

		case 'USERNAME_SUCCESS':
		// let newState = JSON.parse(JSON.stringify(state))
		return {...state, usernameSuccess: action.usernameSuccess}
		
		//same as :  state.usernameSuccess = action.usernameSuccess
		


		default:
      
      return state;

	}
}

export default authReducer

// const fetching = (state = { isFetching: false }, action) => {
//   switch (action.type) {
//     case 'REQUESTING':
//       const newState = JSON.parse(JSON.stringify(state));
//       newState.isFetching = true;
//       return newState;
//     case 'RECEIVE_POKEMON_TYPE_INFO':
//       const newState = JSON.parse(JSON.stringify(state));
//       newState.isFetching = false;
//       return newState;
//     default:
//       return state
//   }
// }