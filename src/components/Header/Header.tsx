import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Header.module.css';
import { selectService } from '@/redux';
import logo from '@/assets/images/logo.svg';
import themeDark from '@/assets/images/theme-dark.svg';
import themeLight from '@/assets/images/theme-light.svg';
import { FullNavBar, MobNavBar } from './parts';

type PropsT = {
	themeHandler: () => void;
	isDarkMode: boolean;
};

export const Header: React.FC<PropsT> = ({ themeHandler, isDarkMode }) => {
	const {
		screen: { deviceType },
	} = useSelector(selectService);

	const isMobile = deviceType === 'mobile';

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
