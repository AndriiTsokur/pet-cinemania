import { RequestStatusT } from './serviceSliceStateTypes';
import { TrendingDataT } from './trendingSliceStateTypes';

export type UpcomingDataT = TrendingDataT;

export type UpcomingStateT = {
	data: null | TrendingDataT[];
	dataUpdated: null | TrendingDataT;
	status: RequestStatusT;
};
