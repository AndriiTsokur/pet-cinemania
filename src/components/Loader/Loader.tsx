import styles from './Loader.module.css';

export const Loader: React.FC = () => {
	return (
		<div className={styles.backdrop}>
			<p className={styles.text}>LOADING...</p>
		</div>
	);
};
