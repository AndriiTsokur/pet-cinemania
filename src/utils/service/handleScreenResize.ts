import { screenConfig } from '@/utils';

export const handleScreenResize = (screenWidth: number) => {
	const actualScreen = {
		deviceType: '',
		cardsInRow: 1,
		screenWidth: 0,
		movieCardHeight: '',
		fetchBackdropURL: '',
		fetchPosterURL: '',
	};

	for (let i = 0; i < screenConfig.length; i++) {
		if (screenWidth >= screenConfig[i].minScreenWidth) {
			actualScreen.deviceType = screenConfig[i].deviceType;
			actualScreen.screenWidth = screenWidth;
			actualScreen.movieCardHeight = `${Math.round((screenWidth / screenConfig[i].minScreenWidth) * screenConfig[i].minCardHeight)}px`;

			break;
		}
	}

	return actualScreen;
};
