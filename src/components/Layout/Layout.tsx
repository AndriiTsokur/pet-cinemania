import { Outlet, useNavigation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Layout.module.css';
import { selectLocal, selectService, toggleColorMode } from '@/redux';
import { Footer, Header, Loader, MobileMenu, Modal } from '@/components';

export function Layout() {
	const { state } = useNavigation();
	const dispatch = useDispatch();
	const { isDarkMode } = useSelector(selectLocal);
	const {
		modal: { modalIsOpen },
	} = useSelector(selectService);

	const handleColorTheme = () => dispatch(toggleColorMode());

	return (
		<div className={`${styles.layout} ${!isDarkMode && styles.lightMode}`}>
			<Header isDarkMode={isDarkMode} themeHandler={handleColorTheme} />
			<main className={styles.main}>
				{state === 'loading' ? <Loader /> : <Outlet />}
			</main>
			<Footer />

			<MobileMenu />
			{modalIsOpen && <Modal />}
		</div>
	);
}
