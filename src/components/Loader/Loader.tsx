import styles from './Loader.module.css';
import popcorn from '@/assets/images/popcorn.gif';

export const Loader: React.FC = () => {
	return (
		<div className={styles.backdrop}>
			<div className={styles.top}>
				<img className={styles.popcorn} src={popcorn} alt="Loader" />
			</div>
			<div className={styles.bottom}>
				<p className={styles.text}>LOADING</p>
			</div>
		</div>
	);
};
