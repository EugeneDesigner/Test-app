import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/CounterActions';
import Counter from '../components/Counter';
import Footer from '../components/Footer';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
class App extends Component {
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const { counter, actions } = this.props;
    return (
      <div className="test-container">
        <header></header>

        <Counter counter={counter} actions={actions} />
        <div>
          {this.props.children}
        </div>
        <Footer />

      </div>
    );
  }
}

App.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
