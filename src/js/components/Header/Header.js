import React, { Component } from 'react';

import { Link } from 'react-router-dom';


export default class Header extends Component {

	handleClick = (event) => {
		console.log('what happens');
	}

	render() {
		console.log('rendering header');

		return (
			<div>
				<h1 onClick={this.handleClick}>Header</h1>
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="about">About</Link></li>
					</ul>
				</nav>
			</div>
		);
	}
}
