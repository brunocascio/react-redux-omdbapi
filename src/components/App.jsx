import React from 'react';
import { Link } from 'react-router'

const AppView = React.createClass({
	render() {
		return (
			<div>
				<h1>App</h1>
				<Link to="/movies">Movies</Link>
				<Link to="/seasons">Seasons</Link>
				{this.props.children}
			</div>
		);
	}
})

export default AppView
