import { useNavigate } from 'react-router-dom';
import styles from './LibraryPlug.module.css';
import { Button } from '@/components';

export const LibraryPlug: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.plug}>
			<p className={styles.plugText}>
				OOPS...
				<br />
				We are very sorry!
				<br />
				You don’t have any movies at your library
			</p>
			<Button isGradient={true} onClick={() => navigate('/catalogue')}>
				Search movies
			</Button>
		</div>
	);
};
