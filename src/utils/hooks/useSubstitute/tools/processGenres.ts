import { GenresDataT, TrendingDataT } from '@/utils';

type ParamsT = {
	movie: TrendingDataT;
	genres: GenresDataT | null | undefined;
};

export const processGenres = ({ movie, genres }: ParamsT) => {
	const updatedData = {
		genresText: [] as string[],
	};

	if (movie.genre_ids.length === 0) {
		updatedData.genresText.push('Not specified');
	} else {
		movie.genre_ids.map((id) => {
			const genre = genres?.find((item) => item.id === id);
			if (genre) updatedData.genresText.push(genre.name);
		});
	}

	return updatedData;
};
