import { useEffect } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Layout.module.css';
import {
	selectLibrary,
	selectService,
	fetchApiConfigThunk,
	toggleColorMode,
} from '@/redux';
import { Footer, Header } from '@/components';

export function Layout() {
	const { state } = useNavigation();

	const dispatch = useDispatch();
	const { isDarkMode } = useSelector(selectLibrary);
	const {
		apiConfig: { data },
	} = useSelector(selectService);

	useEffect(() => {
		if (data !== null) return;

		dispatch<any>(fetchApiConfigThunk());
	}, []);

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
