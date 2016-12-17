var React = require('react');

import { Router, Route,browserHistory} from 'react-router';
// import PeopleContainer from '../components/PeopleContainer'
import Test from '../containers/test'
import store from '../store/configure-store'
import { Provider } from 'react-redux';
import App from '../../src/App'
import UserInputContainer from '../containers/UserInputContainer'

var routes = (
<Provider store={store}>
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		
		<Route path='/test' component={Test} />
		<Route path='/input' component={UserInputContainer} />
		</Route>

	</Router>
</Provider>
)

 module.exports = routes