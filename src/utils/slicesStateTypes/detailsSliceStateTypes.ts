import { RequestStatusT } from './serviceSliceStateTypes';
import { TrendingDataT } from './trendingSliceStateTypes';

// export type GenresT = {
// 	id: number;
// 	name: string;
// };

export type DetailsDataT = TrendingDataT;

export type DetailsStateT = {
	data: null | DetailsDataT;
	status: RequestStatusT;
};
