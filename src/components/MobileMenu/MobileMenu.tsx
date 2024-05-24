import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './MobileMenu.module.css';
import { navData } from '@/router';
import { toggleMobileMenu } from '@/redux';

export const MobileMenu: React.FC = () => {
	const dispatch = useDispatch();

	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				{navData.map(({ path, linkText }) => (
					<li key={linkText}>
						<NavLink
							to={`/${path}`}
							className={({ isActive }) =>
								isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
							}
							onClick={() => dispatch(toggleMobileMenu())}
						>
							{linkText}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
