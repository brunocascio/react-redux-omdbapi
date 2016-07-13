import React from 'react';
import List from '../../containers/Movies/List';

const MoviesView = React.createClass({
  componentDidMount() {
    this.props.getMovies();
  },
  render() {
    const { total } = this.props;
    return (
      <div>
        Total Results: {total}
        <List />
      </div>
    )
  }
})

export default MoviesView;
