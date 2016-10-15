import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import CreatePage from './components/CreatePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CreatePage}/>
  </Route>
);
