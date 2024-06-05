export type MoviesResultsT = {
	backdrop_path: string;
	backdrop_url?: string;
	id: number;
	overview: string;
	overview_brief?: string;
	poster_path: string;
	poster_url?: string;
	title: string;
	genre_ids: number[];
	genres?: string[] | undefined;
	popularity: number | string;
	release_date: string;
	vote_average: number | string;
	vote_count: number;
	[key: string]: any;
};

export type MoviesDataT = {
	page: number;
	results: MoviesResultsT[];
	total_pages: number;
	total_results: number;
};
