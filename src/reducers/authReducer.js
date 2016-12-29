


export default function authReducer (state = {} ,action)  {
	// let newState = JSON.parse(JSON.stringify(state))
	// console.log('new state',newState)

	switch (action.type) {
		case 'USER_LOGIN':
		
		return {...state, logged: true}

		case 'GET_INPUTDATA':
		// console.log({...state, car: action.inputData})
		return {...state, carInfo: action.inputData}


		case 'USER_LOGOUT':
		return {...state, logged: false}

		case 'USERNAME_SUCCESS':
		// let newState = JSON.parse(JSON.stringify(state))
		return {...state, usernameSuccess: action.usernameSuccess}
		
		//same as :  state.usernameSuccess = action.usernameSuccess

	}
	return state;
}



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