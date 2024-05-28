import { AxiosError } from 'axios';

export type ApiConfigDataT = {
	base_url: string;
	secure_base_url: string;
	backdrop_sizes: string[];
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
	error: null | string | AxiosError;
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
	modal: {
		mobileMenuIsOpen: boolean;
		modalIsOpen: boolean;
		modalType: 'details' | 'video';
		movieId: number;
	};
	screen: {
		deviceType: '' | 'mobile' | 'tablet' | 'desktop';
		cardsInRow: number;
		screenWidth: number;
		movieCardHeight: string;
		fetchBackdropURL: string;
		fetchPosterURL: string;
	};
};
