export const handleScreenResize = (screenWidth: number) => {
	let deviceType = 'desktop';
	let movieCardHeight = '';

	if (screenWidth < 768) {
		deviceType = 'mobile';
		movieCardHeight = `${Math.round((screenWidth / 320) * 406)}px`;
	} else if (screenWidth < 1280) {
		deviceType = 'tablet';
		movieCardHeight = `${Math.round((screenWidth / 768) * 325)}px`;
	} else {
		movieCardHeight = '574px';
	}

	return { deviceType, screenWidth, movieCardHeight };
};
