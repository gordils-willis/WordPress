import path from 'path';
import Express from 'express';

import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import Html from 'containers/Html';
import App from 'containers/App';

import { StaticRouter as Router, matchPath } from 'react-router';

//Todo move to services
import fetch from 'node-fetch';

import { Provider } from 'react-redux';

import configureStore from './store';


let server = new Express();


//server.use(Express.static(path.resolve(__dirname + '/public')));

let port = process.env.PORT || 8081;

server.use("/static", Express.static(__dirname + '/static'));

//get routes
const routes = [
	'/',
	'/about'
];

let initialState = {};

//TODO api endpoints that connect to the wordpress api
let store = configureStore(initialState);


// server.use('/public', function (req, res) {
// 	console.log('got a request to public');
// });

//server.use(Express.static(path.join(__dirname))); //here you can change your path. for example you could add + 'public' if all of your files where in the 'public' directory


server.get('*', (req, res, next)=> {
	console.log('got a regular request');
	console.log(req.url);
	const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);

	if (!match) {
    res.status(404).send(renderToString(<NoMatch />));
    return;
  }

	//need to get appropriate data based on location
	fetch('http://localhost:8080/wp-json/wp/v2/pages').then( (response, err) => {
		return response.json();
	}).then( (json)=> {


		const app = renderToStaticMarkup(
			<Provider store={store}>
				<Router context={{}} location={req.url}>
					<App
						pages={json}
					/>
				</Router>
			</Provider>
		);

		const html = renderToStaticMarkup(<Html
			title="the title please"
			html={app}
		/>);

		const ieHtmlClass = '<!--[if lt IE 7]><html class="ie ielt9 ielt8 ielt7" lang="en"><![endif]--><!--[if IE 7]><html class="ie ielt9 ielt8 ie7" lang="en"><![endif]--><!--[if IE 8]><html class="ie ielt9 ie8" lang="en"><![endif]--><!--[if IE 9]><html class="ie ie9" lang="en"><![endif]--><!-- [if gt IE 9] <!--><html lang="en"><!-- <![endif]-->';

		res.set('content-type', 'text/html').status(200).send('<!DOCTYPE html>' + ieHtmlClass + html);


	});
});


server.listen(port, () => console.log('Listening on port %d', port) );


