import { apiInstance, requestParams } from './apiInstance';

type ParamsT = {
	query: string;
	year?: string;
	page?: number;
};

export const searchMovies = async (params: ParamsT) => {
	const {
		search: { url, params: defaultParams },
	} = requestParams;

	const finalParams = { ...defaultParams, ...params };

	return await apiInstance(url, { params: finalParams });
};
