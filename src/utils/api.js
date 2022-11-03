import axios from 'axios';
import localForage from 'localforage';

import appConfig from '../configs/app';

const getHeaders = (originalToken, header = {}) => {
	return new Promise(async (resolve, reject) => {
		if(originalToken && originalToken != "") {
			resolve(Object.assign({
				'Authorization': `Bearer ${originalToken}`,
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}, header));
		} else {
			let user = await localForage.getItem('user');
			let token = (user && user.token) ? user.token : false;
			if (!token || token == "") {
				resolve(Object.assign({
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}, header))
			}
			resolve(Object.assign({
				'Authorization': `Bearer ${token}`,
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}, header));
		}
	});
};

export const get = async (endPoint, query, token = "", header = {}) => {
	let headers = await getHeaders(token, header);
	return axios.get(appConfig.apiURI + endPoint, {
		headers: headers,
		params: query
	});
}
export const fetch = async (endPoint, query, token = "", header = {}) => {
	let headers = await getHeaders(token, header);
	return fetch(appConfig.apiURI + endPoint, {
		headers: headers,
		params: query
	});
}

export const getLink = (endPoint, query = {}, token = "", header = {}) => {
	let url = appConfig.apiURI + endPoint;

	return url;
}

export const post = async (endPoint, data, token = "", header = {}) => {
	let headers = await getHeaders(token, header);
	return axios.post(appConfig.apiURI + endPoint, data, {headers: headers, timeout: 20000});
}

export const patch = async (endPoint, data, token = "", header = {}) => {
	let headers = await getHeaders(token, header);
	return axios.patch(appConfig.apiURI + endPoint, data, {headers: headers});
}

export const deleteRequest = async (endPoint, data, token = "", header = {}) => {
	let headers = await getHeaders(token, header);
	return axios.delete(appConfig.apiURI + endPoint, {headers: headers});
}