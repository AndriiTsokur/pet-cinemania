import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import styles from './App.module.css';
import { router } from '@/router';
import { Loader } from '@/components';
import {
	// selectLibrary,
	selectService,
	fetchApiConfigThunk,
	fetchGenresThunk,
	// toggleColorMode,
	fetchTrendingThunk,
} from '@/redux';

export const App: React.FC = () => {
	const dispatch = useDispatch();
	const {
		apiConfig: { data },
		genres: { data: genres },
	} = useSelector(selectService);

	useEffect(() => {
		if (data !== null) return;

		dispatch<any>(fetchApiConfigThunk());
		dispatch<any>(fetchGenresThunk());
	}, []);

	useEffect(() => {
		if (genres === null) return;

		dispatch<any>(fetchTrendingThunk('day'));
		dispatch<any>(fetchTrendingThunk('week'));
	}, [genres]);

	return <RouterProvider router={router} fallbackElement={<Loader />} />;
};
