import styles from './MovieTrailerPlug.module.css';
import trailerPlug from '@/assets/images/trailer-plug.png';

export const MovieTrailerPlug: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textWrapper}>
				<p className={styles.text}>OOPS...</p>
				<p className={styles.text}>We are very sorry!</p>
				<p className={styles.text}>But we couldn't find the trailer</p>
			</div>
			<img
				src={trailerPlug}
				className={styles.plug}
				alt="There are no trailers available"
			/>
		</div>
	);
};
