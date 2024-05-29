import { apiInstance, requestParams } from './apiInstance';

export const getTrailers = async (movieId: number) => {
	const {
		movieDetails: { url, params },
	} = requestParams;

	return await apiInstance(`${url}/${movieId}/videos`, { params });
};
