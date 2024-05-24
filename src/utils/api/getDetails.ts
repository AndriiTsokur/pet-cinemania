import { apiInstance, requestParams } from './apiInstance';

export const getDetails = async (movieId: number) => {
	const {
		movieDetails: { url, params },
	} = requestParams;

	return await apiInstance(`${url}/${movieId}`, { params });
};
