import { MoviesResultsT, MoviesDataT } from './moviesDataTypes';
import { RequestStatusT } from './serviceSliceStateTypes';

export type UpcomingStateT = {
	data: null | MoviesDataT;
	dataUpdated: null | MoviesResultsT;
	status: RequestStatusT;
};
