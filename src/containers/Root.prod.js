import React, { Component } from 'react';
import { Provider } from 'react-redux';
import routes from './routes'

/**
 * Component is exported for conditional usage in Root.js
 */
module.exports = class Root extends Component {
  render() {
    const { store } = this.props;
    return (

      <Provider store={store}>
        {routes}
      </Provider>
    );
  }
};
