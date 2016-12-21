


function authReducer (state =[],action) {

	//state = JSON.parse(JSON.stringify(state))

	switch (action.type) {
		case 'USER_LOGIN':
		state.logged = true
		return state;

		case 'USER_LOGOUT':
		state.logged = false
		return state;

		case 'USERNAME_SUCCESS':
		state.usernameSuccess = action.usernameSuccess
		return state;

		default:
      state.usernameSuccess = !state.usernameSuccess;
      return state;

	}
}

export default authReducer