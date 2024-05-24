import { useDispatch } from 'react-redux';
import styles from './MobNavBar.module.css';
import { toggleMobileMenu } from '@/redux';

export const MobNavBar: React.FC = () => {
	const dispatch = useDispatch();

	return (
		<p onClick={() => dispatch(toggleMobileMenu())} className={styles.menu}>
			Menu
		</p>
	);
};
