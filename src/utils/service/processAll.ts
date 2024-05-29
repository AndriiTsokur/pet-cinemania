import {
	processFetchedImages,
	processGenres,
	processOverview,
	randomizer,
} from '@/utils';
import { GenresDataT, TrendingDataT, ScreenDataT } from '@/utils';

type ParamsT = {
	categoryData: TrendingDataT[];
	screen: ScreenDataT;
	genres: GenresDataT;
};

type ProcessAllT = ParamsT & {
	categoryName: string;
	dayUpdated?: TrendingDataT;
};

type CommonCalculationsT = ParamsT & {
	index: number;
};

export const processAll = ({
	categoryName,
	categoryData,
	screen,
	genres,
	dayUpdated,
}: ProcessAllT) => {
	let index = 0;
	let result: any;

	if (categoryName !== 'week') {
		index = randomizer({ min: 0, max: categoryData.length });
		result = commonCalculations({ index, categoryData, screen, genres });
	} else {
		const tempRandomCardIndexes: number[] = [];
		const randomUpdatedMovies: TrendingDataT[] = [];

		while (tempRandomCardIndexes.length < screen.cardsInRow) {
			const randomIndex = randomizer({ min: 0, max: categoryData.length });
			if (
				!tempRandomCardIndexes.includes(randomIndex) &&
				categoryData[randomIndex].id !== dayUpdated?.id
			) {
				tempRandomCardIndexes.push(randomIndex);
			}
		}

		tempRandomCardIndexes.map((index) => {
			const update = commonCalculations({
				index,
				categoryData,
				screen,
				genres,
			});
			randomUpdatedMovies.push(update);
		});

		result = [...randomUpdatedMovies];
	}

	return result;
};

function commonCalculations({
	index,
	categoryData,
	screen,
	genres,
}: CommonCalculationsT) {
	const { backdrop, poster } = processFetchedImages({
		screen,
		movie: categoryData[index],
	});

	const { overview, overview_brief } = processOverview({
		movie: categoryData[index],
		deviceType: screen.deviceType,
	});

	const genresArray = processGenres({
		genres,
		movie: categoryData[index],
	});
	const popularity = Number(categoryData[index].popularity).toFixed(1);
	const vote_average = Number(categoryData[index].vote_average).toFixed(1);

	const update = {
		...categoryData[index],
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
