import { GenresDataT, MoviesResultsT } from '@/utils';

type ParamsT = {
	movie: MoviesResultsT;
	genres: GenresDataT | null | undefined;
};

export const processGenres = ({ movie, genres }: ParamsT) => {
	const genresText: string[] = [];

	if (movie.genre_ids.length === 0) {
		genresText.push('Not specified');
	} else {
		movie.genre_ids.map((id) => {
			const genre = genres?.find((item) => item.id === id);
			if (genre) genresText.push(genre.name);
		});
	}

	return genresText;
};
