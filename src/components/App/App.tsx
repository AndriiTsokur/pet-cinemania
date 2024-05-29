import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleScreenResize } from '@/utils';

import { router } from '@/router';
import {
	defineScreenParams,
	fetchApiConfigThunk,
	fetchGenresThunk,
	fetchTrendingThunk,
	fetchUpcomingThunk,
	selectService,
	selectTrendingAll,
	selectUpcoming,
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

		if (screenWidth !== window.innerWidth) updateScreenParams();

		window.addEventListener('resize', updateScreenParams);
		return () => window.removeEventListener('resize', updateScreenParams);
	}, [dispatch]);

	// Initial fetch of Service Details data
	useEffect(() => {
		if (!apiConfig) dispatch<any>(fetchApiConfigThunk());
	}, []);

	useEffect(() => {
		if (!genres) dispatch<any>(fetchGenresThunk());
	}, []);

	// Initial fetch of Movies Details data
	useEffect(() => {
		if (!day) dispatch<any>(fetchTrendingThunk('day'));
	}, []);

	useEffect(() => {
		if (!week) dispatch<any>(fetchTrendingThunk('week'));
	}, []);

	useEffect(() => {
		if (!upcoming) dispatch<any>(fetchUpcomingThunk());
	}, []);

	return <RouterProvider router={router} fallbackElement={<Loader />} />;
};
