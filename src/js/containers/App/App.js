import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return (
			<div>
				<h2>React App</h2>
				<pre>
				{JSON.stringify(this.props.data, null, '\t')}
				</pre>
			</div>
		);
	}
}
