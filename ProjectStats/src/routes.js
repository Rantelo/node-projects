import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App  from './components/app';
import Demo from './components/demo';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Demo} />
  </Route>
);
