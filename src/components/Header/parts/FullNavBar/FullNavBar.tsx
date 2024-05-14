import { NavLink } from 'react-router-dom';
import styles from './FullNavBar.module.css';
import { navData } from '@/router';

export const FullNavBar: React.FC = () => {
	return (
		<nav>
			<ul className={styles.navList}>
				{navData.map(({ path, linkText }) => (
					<li key={linkText}>
						<NavLink
							to={`/${path}`}
							className={({ isActive }) =>
								isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
							}
						>
							{linkText}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
