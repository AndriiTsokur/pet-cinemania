import { useState } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import styles from './Layout.module.css';
import { Header } from '@/components';

export function Layout() {
	const { state } = useNavigation();
	const [isThemeLight, setIsThemeLight] = useState(false);

	const handleColorTheme = () => {
		setIsThemeLight(!isThemeLight);
	};

	return (
		<div className={`${styles.layout} ${isThemeLight && styles.lightMode}`}>
			<Header isThemeLight={isThemeLight} themeHandler={handleColorTheme} />
			<main className={styles.main}>
				{state === 'loading' ? (
					<div role="loader">Loading, please wait...</div>
				) : (
					<Outlet />
				)}
			</main>
		</div>
	);
}
