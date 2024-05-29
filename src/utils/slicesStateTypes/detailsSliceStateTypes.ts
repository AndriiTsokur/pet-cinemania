import { TrendingDataT } from './trendingSliceStateTypes';
import { RequestStatusT } from './serviceSliceStateTypes';

export type DetailsDataT = TrendingDataT;

export type TrailerDataT = {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string;
	id: string;
};

export type DetailsStateT = {
	data: null | DetailsDataT;
	trailers: null | TrailerDataT[];
	status: RequestStatusT;
};
