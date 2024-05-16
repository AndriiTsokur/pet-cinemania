import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import logo from '@/assets/images/logo.svg';
import themeDark from '@/assets/images/theme-dark.svg';
import themeLight from '@/assets/images/theme-light.svg';
import { FullNavBar, MobNavBar } from './parts';

type PropsT = {
	themeHandler: () => void;
	isDarkMode: boolean;
};

export const Header: React.FC<PropsT> = ({ themeHandler, isDarkMode }) => {
	// TODO! Вынести isMobile и isModalvisible в глобальный стейт
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<header className={`${styles.header}`}>
			<Link to="/">
				<div className={styles.logoWrapper}>
					<img src={logo} className={styles.logo} alt="Cinemania Logo" />

					{!isMobile && <p className={styles.logoText}>Cinemania</p>}
				</div>
			</Link>
			{isMobile ? <MobNavBar /> : <FullNavBar />}

			<img
				className={styles.modeSwitcher}
				src={isDarkMode ? themeDark : themeLight}
				onClick={themeHandler}
				alt="Color mode switcher"
			/>
		</header>
	);
};
