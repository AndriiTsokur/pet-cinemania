import styles from './MobNavBar.module.css';

export const MobNavBar: React.FC = () => {
	const handleMenu = () => {
		console.log('MENU');
	};
	return (
		<p onClick={handleMenu} className={styles.menu}>
			Menu
		</p>
	);
};
