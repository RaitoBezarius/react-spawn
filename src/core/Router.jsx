import React from 'react';
import Router, {Route, DefaultRoute} from 'react-router';

import Application from 'containers/Application.react';
import Home from 'components/Home.react';

const Routes = (
  <Route handler={Application}>
    <DefaultRoute handler={Home} />
    <Route handler={Home}
      name="home" />
	</Route>
);

export default Router.create({
	routes: Routes,
	location: Router.HashLocation
});
