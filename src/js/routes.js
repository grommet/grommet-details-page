import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import DetailsPage from './components/DetailsPage';

const rootPath = '/';

const routes = (
  <Router history={browserHistory} >
    <Route path={rootPath} component={App}>
      <IndexRoute component={DetailsPage} />
    </Route>
  </Router>
);

export default routes;
