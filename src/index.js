import React from 'react'

import { render } from 'react-dom'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import configureStore from './store/configure-store'
import routes from './config/routes'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css'


render(routes, document.getElementById('root'))

