import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/app';
import reducers from './reducers';

import { Router, browserHistory} from 'react-router';
import routes from './routes';
import promise from 'redux-promise';

const createStoreWithMiddleware = compose(
    applyMiddleware( promise ),
  window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
