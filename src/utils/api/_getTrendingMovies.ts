import { apiInstance, requestParams } from './apiInstance';

export const getTrendingMovies = async (period: 'day' | 'week') => {
	const {
		trendingMovies: { url, params },
	} = requestParams;

	try {
		const res = await apiInstance(`${url}/${period}`, { params });

		if (res.status < 200 || res.status >= 300) {
			throw new Error(`Failed to retrieve trending movies: ${res.status}`);
		}
		console.log(res.data.results);
		// return res.data.results;
	} catch (err: any) {
		console.error(
			err.response.status,
			`Failed to retrieve trending movies: ${err.message}`,
		);
	}
};
