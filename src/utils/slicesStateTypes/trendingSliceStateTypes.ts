import { RequestStatusT } from './serviceSliceStateTypes';

export type TrendingDataT = {
	backdrop_path: string;
	backdrop_url?: string;
	id: number;
	overview: string;
	overview_brief?: string;
	poster_path: string;
	poster_url?: string;
	title: string;
	genre_ids: number[];
	genres?: string[];
	popularity: number | string;
	release_date: string;
	vote_average: number | string;
	vote_count: number;
};

export type TrendingStateT = {
	day: null | TrendingDataT[];
	dayUpdated: null | TrendingDataT;
	week: null | TrendingDataT[];
	weekUpdated: null | TrendingDataT[];
	status: RequestStatusT;
};
