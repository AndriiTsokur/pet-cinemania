import styles from './BurgerMenu.module.css';

export const BurgerMenu: React.FC = () => {
	const handleMenu = () => {
		console.log('MENU');
	};
	return (
		<p onClick={handleMenu} className={styles.menu}>
			Menu
		</p>
	);
};
