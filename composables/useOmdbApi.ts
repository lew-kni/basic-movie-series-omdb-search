import axios from 'axios';

const API_KEY = '9e3bce1f';

const api = axios.create({
	baseURL: 'https://www.omdbapi.com/',
	timeout: 10000,
});

api.interceptors.request.use((config) => {
	config.params = {
		apikey: API_KEY,
		...config.params,
	};

	return config;
});

export const useOmdbApi = () => {
	const search = (value: string, type: string, page = 1) => {
		return api.get('/', {
			params: {
				apikey: API_KEY,
				s: value,
				type: type,
				page,
			},
		});
	};

	const getById = (id: string) => {
		return api.get('/', {
			params: {
				apikey: API_KEY,
				i: id,
			},
		});
	};

	return {
		search,
		getById,
	};
};
