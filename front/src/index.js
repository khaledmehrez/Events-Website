import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";

import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


import { CookiesProvider } from 'react-cookie';


ReactDOM.render(
    <CookiesProvider>
    <Provider store={store}>
    <BrowserRouter>
    
    <App />
    
    </BrowserRouter>
    </Provider>
    </CookiesProvider> , document.getElementById('root'));

registerServiceWorker();