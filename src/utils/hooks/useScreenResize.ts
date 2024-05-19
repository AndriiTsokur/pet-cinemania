import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { defineScreenParams } from '@/redux';

export const useScreenResize = (initialScreenWidth: number) => {
	const dispatch = useDispatch();

	const handleResize = () => {
		const screenWidth = initialScreenWidth;
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

		dispatch(defineScreenParams({ deviceType, screenWidth, movieCardHeight }));
	};

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [dispatch, initialScreenWidth]);
};
