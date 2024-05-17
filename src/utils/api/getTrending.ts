import { apiInstance, requestParams } from './apiInstance';

export const getTrending = async (period: 'day' | 'week') => {
	const {
		trendingMovies: { url, params },
	} = requestParams;

	return await apiInstance(`${url}/${period}`, { params });
};
