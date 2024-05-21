import { apiInstance, requestParams } from './apiInstance';

export const getUpcoming = async () => {
	const {
		upcoming: { url, params },
	} = requestParams;

	return await apiInstance(url, { params });
};
