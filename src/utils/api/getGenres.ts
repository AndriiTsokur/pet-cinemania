import { apiInstance, requestParams } from './apiInstance';

export const getGenres = async () => {
	const {
		genres: { url, params },
	} = requestParams;

	return await apiInstance(url, { params });
};
