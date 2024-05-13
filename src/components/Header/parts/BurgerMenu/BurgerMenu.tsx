import styles from './BurgerMenu.module.css';

export const BurgerMenu: React.FC = () => {
	const handleMenu = () => {
		console.log('MENU');
	};
	return (
		<nav className={`${styles.nav}`}>
			<p onClick={handleMenu} className={styles.menu}>
				Menu
			</p>
		</nav>
	);
};
