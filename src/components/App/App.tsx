import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useScreenResize } from '@/utils/hooks';

import { router } from '@/router';
import {
	selectService,
	fetchApiConfigThunk,
	fetchGenresThunk,
	fetchTrendingThunk,
} from '@/redux';
import { Loader } from '@/components';

export const App: React.FC = () => {
	const dispatch = useDispatch();

	const {
		apiConfig: { data },
		genres: { data: genres },
	} = useSelector(selectService);

	// Custom hook for handling screen resize
	useScreenResize(window.innerWidth);

	// Initial fetch of Service Details and Home page data
	useEffect(() => {
		if (data !== null) return;

		dispatch<any>(fetchApiConfigThunk());
		dispatch<any>(fetchGenresThunk());
	}, [data, dispatch]);

	useEffect(() => {
		if (genres === null) return;

		dispatch<any>(fetchTrendingThunk('day'));
		dispatch<any>(fetchTrendingThunk('week'));
	}, [genres, dispatch]);

	return <RouterProvider router={router} fallbackElement={<Loader />} />;
};
