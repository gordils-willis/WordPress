import environments from 'environments';
const config = environments[process.env.NODE_ENV]();

import { json, status, defaultHeaders, formHeaders, formBodyFromJson, queryFromJson } from 'util/fetch';

export const load = (endpoint, query) => {

	let url = query ? `${config.API_PATH}\/${endpoint}\/${queryFromJson(query)}` : `${config.API_PATH}\/${endpoint}\/`;

	const options = {
		headers : defaultHeaders()
	};

	return fetch(url, options)
	.then(status)
	.then(json)
	.then( (response) => {
		return response;
	}).catch( (error) => {
		return error;
	});

};

export const get = (endpoint, id) => {
	const options = {
		headers : defaultHeaders()
	};

	const url = id ? `${config.API_PATH}\/${endpoint}\/${id}\/` : `${config.API_PATH}\/${endpoint}\/`;

	return fetch(url, options)
	.then(status)
	.then(json)
	.then( (response) => {
		return response;
	}).catch( (error) => {
		return error;
	});
};

export const create = (endpoint, data, id) => {

	const options = {
		method : 'POST',
		body : JSON.stringify({data:data}),
		headers : defaultHeaders()
	};

	const url = id ? `${config.API_PATH}\/${endpoint}\/${id}\/` : `${config.API_PATH}\/${endpoint}\/`;

	return fetch(url, options)
	.then(status)
	.then(json)
	.then( (response) => {
		return response;
	}).catch( (error) => {
		return error;
	});
};

export const update = (endpoint, id, data, method = 'PUT') => {
	const options = {
		method : method,
		body : JSON.stringify({data:data}),
		headers : defaultHeaders()
	};

	const url = `${config.API_PATH}\/${endpoint}\/${id}\/`;

	return fetch(url, options)
	.then(status)
	.then(json)
	.then( (response) => {
		return response;
	}).catch( (error) => {
		return error;
	});
};

export const remove = (endpoint, id) => {
	const options = {
		method : 'DELETE',
		headers : defaultHeaders()
	};

	const url = `${config.API_PATH}\/${endpoint}\/${id}\/`;

	return fetch(url, options)
	.then(status)
	.then(json)
	.then( (response) => {
		return response;
	}).catch( (error) => {
		return error;
	});
};
