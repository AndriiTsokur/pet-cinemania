import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './MobMenu.module.css';
import { navData } from '@/router';
import { toggleModal } from '@/redux';

export const MobMenu: React.FC = () => {
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
							onClick={() => dispatch(toggleModal())}
						>
							{linkText}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
