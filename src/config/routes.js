var React = require('react');

import { Router, Route,browserHistory, IndexRoute} from 'react-router';
// import PeopleContainer from '../components/PeopleContainer'
import Test from '../containers/test'
import store from '../store/configure-store'
import { Provider } from 'react-redux';
import App from '../../src/App'
import UserInputContainer from '../containers/UserInputContainer'
import Auth from '../components/authorization/Auth'
import Main from '../components/Main'
import Signup from '../components/authorization/Signup'


var routes = (
<Provider store={store}>
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		<IndexRoute component={UserInputContainer} />
		
		<Route path='/input' component={UserInputContainer} />
		<Route path='/signup' component={Signup} />
		
		</Route>
		

	</Router>
</Provider>
)

 module.exports = routes
		// <IndexRoute component={App}></IndexRoute>