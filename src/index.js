import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import HttpsRedirect from 'react-https-redirect';

ReactDOM.render((
	<HttpsRedirect>
		<HashRouter>
			<App />
		</HashRouter>
	</HttpsRedirect>
), document.getElementById('root'));

//registerServiceWorker();