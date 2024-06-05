import { ScreenDataT, MoviesResultsT } from '@/utils';
import posterPlug from '@/assets/images/poster-plug.jpg';

type ParamsT = {
	screen: ScreenDataT;
	movie: MoviesResultsT;
};

export const processFetchedImages = ({ screen, movie }: ParamsT) => {
	const backdrop = movie.backdrop_path
		? `${screen.fetchBackdropURL}${movie.backdrop_path}`
		: posterPlug;

	const poster = movie.poster_path
		? `${screen.fetchPosterURL}${movie.poster_path}`
		: posterPlug;

	return { backdrop, poster };
};
