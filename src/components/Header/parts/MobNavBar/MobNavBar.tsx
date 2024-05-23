import { useDispatch } from 'react-redux';
import styles from './MobNavBar.module.css';
import { toggleModal } from '@/redux';

export const MobNavBar: React.FC = () => {
	const dispatch = useDispatch();

	// const handleMenu = () => {
	// 	console.log('MENU');
	// };
	return (
		<p onClick={() => dispatch(toggleModal())} className={styles.menu}>
			Menu
		</p>
	);
};
