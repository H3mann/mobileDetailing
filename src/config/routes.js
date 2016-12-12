var React = require('react');

import { Router, Route,browserHistory} from 'react-router';
import PeopleContainer from '../components/PeopleContainer'
import Test from '../components/test'
import store from '../store/configure-store'
import { Provider } from 'react-redux';
import App from '../../src/App'

var routes = (
<Provider store={store}>
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		</Route>
		<Route path='/test' component={Test}>
		</Route>

	</Router>
</Provider>
)

 module.exports = routes