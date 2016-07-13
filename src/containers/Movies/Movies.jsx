import { connect } from 'react-redux';
import React from 'react';
import MoviesView from '../../components/Movies/Movies';
import { getMovies } from '../../actions/movies'

function mapStateToProps(state) {
  return {
    total: state.movies.total
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: () => dispatch(getMovies())
  };
}

const Movies = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesView);

export default Movies;
