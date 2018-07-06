import './css/app.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Home } from './components/Home';

var Promise = require('es6-promise').Promise;
import * as ES6Promise from 'es6-promise';
ES6Promise.polyfill();

import 'core-js/fn/object/assign';
import 'core-js/fn/promise';

function renderApp() {
	ReactDOM.render(<Home />, document.getElementById('app'));
}

renderApp();
