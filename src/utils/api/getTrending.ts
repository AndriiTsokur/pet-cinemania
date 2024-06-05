import { apiInstance, requestParams } from './apiInstance';

type ParamsT = {
	period: 'day' | 'week';
	page?: number;
};

export const getTrending = async ({ period, page = 1 }: ParamsT) => {
	const {
		trendingMovies: { url, params },
	} = requestParams;

	const finalParams = { ...params, page };

	return await apiInstance(`${url}/${period}`, { params: finalParams });
};
