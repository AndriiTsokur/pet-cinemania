import {
	processGenres,
	processImages,
	processOverview,
	processPopularity,
	processVoteAverage,
} from '../tools';
import { ApiConfigDataT, GenresDataT, TrendingDataT } from '@/utils';

type ParamsT = {
	movie: TrendingDataT;
	deviceType: string | null | undefined;
	apiConfig: ApiConfigDataT | null | undefined;
	genres: GenresDataT | null | undefined;
};

export const substituteMovieData = ({
	movie,
	deviceType,
	apiConfig,
	genres,
}: ParamsT) => {
	const updatedData = {
		backdrop: '',
		poster: '',
		genresText: [] as string[],
		overview: '',
		overview_brief: '',
		popularity: '',
		vote_average: '',
	};

	const { backdrop, poster } = processImages({ movie, deviceType, apiConfig });
	updatedData.backdrop = backdrop;
	updatedData.poster = poster;

	const { genresText } = processGenres({ movie, genres });
	updatedData.genresText = genresText;

	const { overview, overview_brief } = processOverview({ movie, deviceType });
	updatedData.overview = overview;
	updatedData.overview_brief = overview_brief;

	updatedData.popularity = processPopularity(movie.popularity);
	updatedData.vote_average = processVoteAverage(movie.vote_average);

	return updatedData;
};
