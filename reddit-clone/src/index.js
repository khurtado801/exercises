import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';

import App from './containers/App/index';
import Routes from './routes';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
, document.getElementById("root"));
registerServiceWorker();
