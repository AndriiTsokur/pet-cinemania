import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './MobileMenu.module.css';
import { navData } from '@/router';
import { selectService, toggleMobileMenu } from '@/redux';
import { BluredBackdrop } from '@/components';

export const MobileMenu: React.FC = () => {
	const dispatch = useDispatch();
	const {
		modal: { mobileMenuIsOpen },
	} = useSelector(selectService);

	const handleClick = () => {
		mobileMenuIsOpen && dispatch(toggleMobileMenu());
	};

	if (!mobileMenuIsOpen) return null;

	return (
		<BluredBackdrop>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					{navData.map(({ path, linkText }) => (
						<li key={linkText}>
							<NavLink
								to={`/${path}`}
								className={({ isActive }) =>
									isActive
										? `${styles.navItem} ${styles.active}`
										: styles.navItem
								}
								onClick={handleClick}
							>
								{linkText}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</BluredBackdrop>
	);
};
