import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import './scss/main.scss';



ReactDOM.render(
<BrowserRouter>
    <Route component={App}></Route>
</BrowserRouter>
, document.getElementById('app'));
registerServiceWorker();