import { connect } from 'react-redux';
import React from 'react';
import AppView from '../components/App';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppView);

export default App;
