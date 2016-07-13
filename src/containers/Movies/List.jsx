import { connect } from 'react-redux';
import React from 'react';
import ListView from '../../components/Movies/List';

function mapStateToProps(state) {
  return {
    movies: state.movies.list
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);

export default List;
