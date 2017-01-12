import React, { Component } from 'react'
import { Provider } from 'react-redux'
import routes from './routes'
import DevTools from './DevTools'


module.exports = class Root extends Component {
  render() {
    const { store } = this.props
    return (

      <Provider store={store}>
        {routes}
      </Provider>
    );
  }
};
