import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import Routes from 'routes';
import createHashHistory from 'history/lib/createHashHistory';

const history = createHashHistory();

render(
  <Router
    routes={Routes}
    history={history}
  />, document.getElementById('spa-app'));
