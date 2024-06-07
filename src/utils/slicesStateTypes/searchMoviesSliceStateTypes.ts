import { MoviesDataT } from './moviesDataTypes';
import { RequestStatusT } from './serviceSliceStateTypes';

export type SearchResultsStateT = {
	query: string;
	data: null | MoviesDataT;
	dataUpdated: null | MoviesDataT;
	status: RequestStatusT;
};
