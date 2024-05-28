import { screenConfig } from '@/utils';

export const defineImagesFetchURL = (state: any) => {
	const actualScreen = screenConfig.find(
		(item) => item.deviceType === state.screen.deviceType,
	);

	state.screen.cardsInRow = actualScreen?.cardsInRow;

	state.screen.fetchBackdropURL =
		state.apiConfig.data.secure_base_url +
			state.apiConfig.data.backdrop_sizes?.find(
				(item: string) =>
					Number(item.slice(1)) >= actualScreen!.minBackdropWidth,
			) || '';

	state.screen.fetchPosterURL =
		state.apiConfig.data.secure_base_url +
			state.apiConfig.data.poster_sizes?.find(
				(item: string) => Number(item.slice(1)) >= actualScreen!.minPosterWidth,
			) || '';
};
