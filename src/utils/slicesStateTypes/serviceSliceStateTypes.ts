import { AxiosError } from 'axios';

export type ApiConfigDataT = {
	base_url: string;
	secure_base_url: string;
	backdrop_size: string[];
	poster_sizes: string[];
};

export type GenresDataT = [
	{
		id: number;
		name: string;
	},
];

export type RequestStatusT = {
	isLoading: boolean;
	error: null | AxiosError;
};

export type ServiceStateT = {
	apiConfig: {
		data: null | ApiConfigDataT;
		status: RequestStatusT;
	};
	genres: {
		data: null | GenresDataT;
		status: RequestStatusT;
	};
};
