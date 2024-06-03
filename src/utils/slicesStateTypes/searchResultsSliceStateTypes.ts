import { RequestStatusT } from './serviceSliceStateTypes';
import { TrendingDataT } from './trendingSliceStateTypes';

export type SearchResultsDataT = {
	page: number;
	result: TrendingDataT[];
	total_pages: number;
	total_results: number;
};

export type SearchResultsStateT = {
	data: null | SearchResultsDataT[];
	dataUpdated: null | SearchResultsDataT[];
	status: RequestStatusT;
};
