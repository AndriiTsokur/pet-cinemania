// import { useEffect } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Layout.module.css';
import {
	selectLibrary,
	// selectService,
	// fetchApiConfigThunk,
	// fetchGenresThunk,
	toggleColorMode,
	// fetchTrendingThunk,
} from '@/redux';
import { Footer, Header } from '@/components';

export function Layout() {
	const { state } = useNavigation();
	const dispatch = useDispatch();
	const { isDarkMode } = useSelector(selectLibrary);
	// const {
	// 	apiConfig: { data },
	// 	genres: { data: genres },
	// } = useSelector(selectService);

	// useEffect(() => {
	// 	if (data !== null) return;

	// 	dispatch<any>(fetchApiConfigThunk());
	// 	dispatch<any>(fetchGenresThunk());
	// }, []);

	// useEffect(() => {
	// 	if (genres === null) return;

	// 	dispatch<any>(fetchTrendingThunk('day'));
	// 	dispatch<any>(fetchTrendingThunk('week'));
	// }, [genres]);

	const handleColorTheme = () => dispatch(toggleColorMode());

	return (
		<div className={`${styles.layout} ${!isDarkMode && styles.lightMode}`}>
			<Header isDarkMode={isDarkMode} themeHandler={handleColorTheme} />
			<main className={styles.main}>
				{state === 'loading' ? (
					<div role="loader">Loading, please wait...</div>
				) : (
					<Outlet />
				)}
			</main>
			<Footer />
		</div>
	);
}
