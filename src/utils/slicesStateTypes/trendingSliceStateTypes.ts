import { RequestStatusT } from './serviceSliceStateTypes';

export type TrendingDataT = {
	backdrop_path: string;
	id: number;
	overview: string;
	poster_path: string;
	title: string;
	genre_ids: number[];
	popularity: number;
	vote_average: number;
	vote_count: number;
};

export type TrendingStateT = {
	day: null | TrendingDataT[];
	week: null | TrendingDataT[];
	status: RequestStatusT;
};
