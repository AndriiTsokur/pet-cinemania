import { TrendingDataT } from './trendingSliceStateTypes';
import { RequestStatusT } from './serviceSliceStateTypes';

export type DetailsDataT = TrendingDataT;

export type DetailsStateT = {
	data: null | DetailsDataT;
	status: RequestStatusT;
};
