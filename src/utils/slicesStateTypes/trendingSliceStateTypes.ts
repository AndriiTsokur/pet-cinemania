import { MoviesResultsT, MoviesDataT } from './moviesDataTypes';
import { RequestStatusT } from './serviceSliceStateTypes';

export type TrendingStateT = {
	day: null | MoviesDataT;
	dayUpdated: null | MoviesResultsT;
	week: null | MoviesDataT;
	weekUpdated: null | MoviesDataT;
	status: RequestStatusT;
};
