// Deps
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import thunkMiddleware from 'redux-thunk';
// Reducers
import reducers from './src/reducers';
// Containers
import App from './src/containers/App';
import Movies from './src/containers/Movies/Movies';
import Seasons from './src/containers/Seasons/Seasons';

const store = createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/movies" component={Movies} />
        <Route path="/seasons" component={Seasons} />
      </Route>
    </Router>
  </Provider>
, document.querySelector("#app"));
