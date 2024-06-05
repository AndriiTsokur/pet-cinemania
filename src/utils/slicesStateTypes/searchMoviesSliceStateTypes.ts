import { RequestStatusT } from './serviceSliceStateTypes';
import { TrendingDataT } from './trendingSliceStateTypes';

export type SearchMoviesDataT = {
	page: number;
	result: TrendingDataT[];
	total_pages: number;
	total_results: number;
};

export type SearchResultsStateT = {
	data: null | SearchMoviesDataT[];
	dataUpdated: null | SearchMoviesDataT[];
	status: RequestStatusT;
};
