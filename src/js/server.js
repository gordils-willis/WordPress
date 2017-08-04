// var express = require('express');
// var app = express();
// var path = require('path');
// var serveIndex = require('serve-index');

// app.use(express.static(path.join(__dirname, '/public')));
// app.use('/', serveIndex(path.join(__dirname, '/public')));

// app.listen(8081, function () {
// 	console.log('listing at 8081')
// });

import Express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';

import Html from 'containers/Html';
import App from 'containers/App';
//import { StaticRouter as Router, matchPath } from 'react-router';
import { StaticRouter as Router } from 'react-router';

//Todo move to services
import fetch from 'node-fetch';


let server = new Express();
let port = process.env.PORT || 8081;

//get routes
const routes = [
	'/',
	'/pages/:pageId'
];

//TODO api endpoints that connect to the wordpress api


server.get('*', (req, res, next)=> {

	fetch('http://localhost:8080/wp-json/wp/v2/pages').then( (res, err) => {
		return res.json();
	}).then( (json)=> {
		console.log(json);
		const app = renderToString(
			<Router context={{}} location={req.url}>
		    <App
					data={json}
		    />
	  	</Router>
		);

		const html = renderToString(<Html
			title="the title please"
			html={app}
		/>);

		const ieHtmlClass = '<!--[if lt IE 7]><html class="ie ielt9 ielt8 ielt7" lang="en"><![endif]--><!--[if IE 7]><html class="ie ielt9 ielt8 ie7" lang="en"><![endif]--><!--[if IE 8]><html class="ie ielt9 ie8" lang="en"><![endif]--><!--[if IE 9]><html class="ie ie9" lang="en"><![endif]--><!-- [if gt IE 9] <!--><html lang="en"><!-- <![endif]-->';

		res.set('content-type', 'text/html').status(200).send('<!DOCTYPE html>' + ieHtmlClass + html);


	})


})



server.listen(port, () => console.log('Listening on port %d', port) );