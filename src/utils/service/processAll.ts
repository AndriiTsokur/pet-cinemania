import {
	processFetchedImages,
	processGenres,
	processOverview,
	randomizer,
} from '@/utils';
import { GenresDataT, MoviesResultsT, ScreenDataT } from '@/utils';

type ParamsT = {
	categoryResults: MoviesResultsT[];
	screen: ScreenDataT;
	genres: GenresDataT;
};

type ProcessAllT = ParamsT & {
	categoryName: string;
	dayUpdated?: MoviesResultsT;
	isCatalogue?: boolean;
};

type CommonCalculationsT = ParamsT & {
	index: number;
};

export const processAll = ({
	categoryName,
	categoryResults,
	screen,
	genres,
	dayUpdated,
	isCatalogue,
}: ProcessAllT): MoviesResultsT | MoviesResultsT[] => {
	if (!categoryResults || !Array.isArray(categoryResults)) {
		return [];
	} // Proposed by ChatGPT

	let index = 0;
	let result: MoviesResultsT | MoviesResultsT[];

	if (categoryName !== 'week') {
		index = randomizer({ min: 0, max: categoryResults.length });
		result = commonCalculations({ index, categoryResults, screen, genres });
	} else {
		const tempRandomCardIndexes: number[] = [];
		const randomUpdatedMovies: MoviesResultsT[] = [];

		if (isCatalogue) {
			// We use plain Weekly Trends results flow for the Catalogue
			for (let i = 0; i < 20; i++) {
				tempRandomCardIndexes.push(i);
			}
		} else {
			// While the Weekly Trends section of the Home Page randomly selects from 1 to 3 movies
			while (tempRandomCardIndexes.length < screen.cardsInRow) {
				const randomIndex = randomizer({ min: 0, max: categoryResults.length });
				if (
					!tempRandomCardIndexes.includes(randomIndex) &&
					categoryResults[randomIndex].id !== dayUpdated?.id
				) {
					tempRandomCardIndexes.push(randomIndex);
				}
			}
		}

		tempRandomCardIndexes.map((index) => {
			if (categoryResults[index]) {
				// if proposed by ChatGPT
				const update = commonCalculations({
					index,
					categoryResults,
					screen,
					genres,
				});
				randomUpdatedMovies.push(update);
			}
		});

		result = [...randomUpdatedMovies];
	}

	return result;
};

function commonCalculations({
	index,
	categoryResults,
	screen,
	genres,
}: CommonCalculationsT): MoviesResultsT {
	const { backdrop, poster } = processFetchedImages({
		screen,
		movie: categoryResults[index],
	});

	const { overview, overview_brief } = processOverview({
		movie: categoryResults[index],
		deviceType: screen.deviceType,
	});

	const genresArray = processGenres({
		genres,
		movie: categoryResults[index],
	});
	const popularity = Number(categoryResults[index].popularity).toFixed(1);
	const vote_average = Number(categoryResults[index].vote_average).toFixed(1);

	const update: MoviesResultsT = {
		...categoryResults[index],
		backdrop_url: backdrop,
		poster_url: poster,
		overview,
		overview_brief,
		genres: genresArray,
		popularity,
		vote_average,
	};

	return update;
}
