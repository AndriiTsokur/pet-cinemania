import { Suspense, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleScreenResize } from '@/utils';

import { router } from '@/router';
import {
	defineScreenParams,
	fetchApiConfigThunk,
	fetchGenresThunk,
	selectService,
} from '@/redux';
import { Loader } from '@/components';

export const App: React.FC = () => {
	const dispatch = useDispatch();
	const {
		apiConfig: { data: apiConfig },
		genres: { data: genres },
		screen: { screenWidth },
	} = useSelector(selectService);

	// Handling screen resize
	useEffect(() => {
		const updateScreenParams = () => {
			const updatedScreenParams = handleScreenResize(window.innerWidth);
			dispatch(defineScreenParams(updatedScreenParams));
		};

		if (screenWidth !== window.innerWidth) {
			updateScreenParams();
		}

		window.addEventListener('resize', updateScreenParams);
		return () => window.removeEventListener('resize', updateScreenParams);
	}, [dispatch, screenWidth]);

	// Initial fetch of Service Details data
	useEffect(() => {
		if (!apiConfig) dispatch<any>(fetchApiConfigThunk());
	}, []);

	useEffect(() => {
		if (!genres) dispatch<any>(fetchGenresThunk());
	}, []);

	return (
		<Suspense fallback={<Loader />}>
			<RouterProvider router={router} />
		</Suspense>
	);
};
