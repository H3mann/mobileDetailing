var React = require('react');

import { Router, Route,browserHistory, IndexRoute} from 'react-router';
// import PeopleContainer from '../components/PeopleContainer'
import Test from '../containers/test'
import store from '../store/configure-store'
import { Provider } from 'react-redux';
import App from '../../src/App'
import UserInputContainer from '../containers/UserInputContainer'
import Auth from '../components/Authorization/Auth'

var routes = (
<Provider store={store}>
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		<IndexRoute component={Auth}></IndexRoute>
		</Route>
		<Route path='/test' component={Test} />
		<Route path='/input' component={UserInputContainer} />
		

	</Router>
</Provider>
)

 module.exports = routes