import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { CookiesProvider } from 'react-cookie';
import { Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { history } from './store'
import { setInterceptors } from './Interceptor/Interceptor'

setInterceptors()

ReactDOM.render(
    <CookiesProvider>
        <BrowserRouter>
                <Provider store={store}>
                    <Router history={history}>
                        <Switch>
                            <Route path="/" component={App} />
                        </Switch>
                    </Router>
                </Provider>
        </BrowserRouter>
    </CookiesProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
