import { apiInstance, requestParams } from './apiInstance';

export const getApiConfig = async () => {
	const {
		configDetails: { url },
	} = requestParams;

	return await apiInstance(url);
};
