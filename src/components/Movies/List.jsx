import React from 'react';

const ListView = React.createClass({
  render() {
    const {movies} = this.props;
    const moviesList = movies.map((m, i) => {
      return  (
        <li key={i}>{m.Title}</li>
      );
    });
    return (
      <ul>
        {moviesList}
      </ul>
    )
  }
})

export default ListView;
