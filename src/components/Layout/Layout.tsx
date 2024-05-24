import { Outlet, useNavigation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Layout.module.css';
import { selectLibrary, selectService, toggleColorMode } from '@/redux';
import { BluredBackdrop, Footer, Header, MobileMenu } from '@/components';

export function Layout() {
	const { state } = useNavigation();
	const dispatch = useDispatch();
	const { isDarkMode } = useSelector(selectLibrary);
	const {
		screen: { modalIsOpen },
	} = useSelector(selectService);

	const handleColorTheme = () => dispatch(toggleColorMode());

	return (
		<div className={`${styles.layout} ${!isDarkMode && styles.lightMode}`}>
			<Header isDarkMode={isDarkMode} themeHandler={handleColorTheme} />

			{modalIsOpen && (
				<BluredBackdrop>
					<MobileMenu />
				</BluredBackdrop>
			)}

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
