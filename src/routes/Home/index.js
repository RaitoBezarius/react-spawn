import Home from './containers/Home.react';

module.exports = {
  path: '/home',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, Home);
    });
  }
}
