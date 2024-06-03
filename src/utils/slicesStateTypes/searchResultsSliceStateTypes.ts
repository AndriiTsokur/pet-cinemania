import { RequestStatusT } from './serviceSliceStateTypes';
import { TrendingDataT } from './trendingSliceStateTypes';

export type SearchResultsDataT = TrendingDataT;

export type SearchResultsStateT = {
	data: null | SearchResultsDataT[];
	dataUpdated: null | SearchResultsDataT[];
	page: number;
	total_pages: number;
	total_results: number;
	status: RequestStatusT;
};
