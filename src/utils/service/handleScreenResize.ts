// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { defineScreenParams } from '@/redux';

// export const handleScreenResize = (dispatch: any) => {
// const dispatch = useDispatch();

export const handleScreenResize = (screenWidth: number) => {
	// const screenWidth = window.innerWidth;
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

	// dispatch(defineScreenParams({ deviceType, screenWidth, movieCardHeight }));
};

// useEffect(() => {
// 	handleResize();
// 	window.addEventListener('resize', handleResize);
// 	return () => window.removeEventListener('resize', handleResize);
// }, [dispatch, window.innerWidth]);
// };
