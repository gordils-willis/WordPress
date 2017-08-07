import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

import Page from 'containers/Page';
import Home from 'containers/Home';


export default class App extends Component {
	render() {
		return (
			<div>
				<Header
					pages={this.props.pages}
				/>

				<Route path="/" exact component={Home} />
				<Route path="/about" exact component={Page} />
				<pre>
				{JSON.stringify(this.props.pages, null, '\t')}
				</pre>
				<Footer />
			</div>
		);
	}
}

