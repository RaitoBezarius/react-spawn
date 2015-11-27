import Application from 'containers/Application.react';

module.exports = {
  component: 'div',
  childRoutes: [
    {
      path: '/',
      component: Application,
      childRoutes: [
        require('routes/Home')
      ]
    }
  ]
}
