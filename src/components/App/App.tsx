import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleScreenResize } from '@/utils/service';

import { router } from '@/router';
import {
	defineScreenParams,
	selectService,
	selectTrendingAll,
	selectUpcoming,
	fetchApiConfigThunk,
	fetchGenresThunk,
	fetchTrendingThunk,
	fetchUpcomingThunk,
} from '@/redux';
import { Loader } from '@/components';

export const App: React.FC = () => {
	const dispatch = useDispatch();

	const {
		apiConfig: { data: apiConfig },
		genres: { data: genres },
		screen: { screenWidth },
	} = useSelector(selectService);
	const { day, week } = useSelector(selectTrendingAll);
	const { data: upcoming } = useSelector(selectUpcoming);

	// Handling screen resize
	useEffect(() => {
		const updateScreenParams = () => {
			const updatedScreenParams = handleScreenResize(window.innerWidth);
			dispatch(defineScreenParams(updatedScreenParams));
		};

		if (screenWidth === null) updateScreenParams();

		window.addEventListener('resize', updateScreenParams);
		return () => window.removeEventListener('resize', updateScreenParams);
	}, [dispatch]);

	// Initial fetch of Service Details and Home page data
	useEffect(() => {
		if (apiConfig !== null) return;
		dispatch<any>(fetchApiConfigThunk());
	}, []);

	useEffect(() => {
		if (genres !== null) return;
		dispatch<any>(fetchGenresThunk());
	}, []);

	useEffect(() => {
		if (day !== null) return;
		dispatch<any>(fetchTrendingThunk('day'));
	}, []);

	useEffect(() => {
		if (week !== null) return;
		dispatch<any>(fetchTrendingThunk('week'));
	}, []);

	useEffect(() => {
		if (upcoming !== null) return;
		dispatch<any>(fetchUpcomingThunk());
	}, []);

	return <RouterProvider router={router} fallbackElement={<Loader />} />;
};
