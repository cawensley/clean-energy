import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import 'bootstrap/scss/bootstrap.scss';
import './styles/freelancer.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
