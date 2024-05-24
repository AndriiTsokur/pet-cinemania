import { RequestStatusT } from './serviceSliceStateTypes';

export type GenresT = {
	id: number;
	name: string;
};

export type DetailsDataT = {
	backdrop_path: string | null;
	genres: GenresT[];
	id: number;
	overview: string;
	popularity: number;
	poster_path: string | null;
	poster_url?: string;
	release_date: string;
	title: string;
	vote_average: number;
	vote_count: number;
};

export type DetailsStateT = {
	data: any | DetailsDataT;
	status: RequestStatusT;
};
