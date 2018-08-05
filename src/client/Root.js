import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App'

import createHashHistory from 'history/createHashHistory';
const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });
    

const Root = () => (
    <BrowserRouter history={hashHistory} basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>
);

export default Root;