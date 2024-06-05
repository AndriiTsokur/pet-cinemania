import { MoviesResultsT } from '@/utils';

type ParamsT = {
	movie: MoviesResultsT;
	deviceType: string | null | undefined;
};

export const processOverview = ({ movie, deviceType }: ParamsT) => {
	const updatedData = {
		overview: '',
		overview_brief: '',
	};

	let maxLength = 0;

	updatedData.overview = movie.overview
		? movie.overview
		: 'Overview not provided';

	switch (deviceType) {
		case 'mobile':
			maxLength = 150;
			break;

		case 'tablet':
			maxLength = 150;
			break;

		default:
			maxLength = 300;
			break;
	}

	if (movie.overview.length > maxLength) {
		const endSymbols = [' ', ',', '.', ':', '?', '!'];
		let lastSymbolPosition = maxLength;
		let endFound = false;

		while (!endFound) {
			const result = endSymbols.find(
				(el) => movie.overview.charAt(lastSymbolPosition) === el,
			);

			if (result) {
				endFound = true;
			} else {
				lastSymbolPosition++;
			}
		}

		updatedData.overview_brief =
			movie.overview.slice(0, lastSymbolPosition) + '...';
	}

	return updatedData;
};
