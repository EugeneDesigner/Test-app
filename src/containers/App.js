import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PlayersActions from '../actions/PlayersActions'
import Football from '../components/Football'
import Footer from '../components/Footer'
import DevTools from './DevTools'
import Header from '../components/Header'

//Container of our app, main application
class App extends Component {
  render() {
    const { football, actions } = this.props
    return (
      <div className="test-container">
        <Header/>

        <Football football={football} actions={actions}/>
        <div>
          {this.props.children}
        </div>
        <Footer />

      </div>
    );
  }
}

App.propTypes = {
  football: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    football: state.football
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PlayersActions, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
