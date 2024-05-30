import { useSelector } from 'react-redux';

import styles from './LibraryPage.module.css';
import { selectLocal } from '@/redux';
import { MovieCard } from '@/components';
import { LibraryPlug } from './parts';

export const LibraryPage: React.FC = () => {
	const { movies } = useSelector(selectLocal);

	return (
		<article>
			<div className={styles.hero}>
				<div className={styles.textWrapper}>
					<h1 className={styles.title}>Create Your Dream Cinema</h1>
					<p className={styles.text}>
						Is a guide to designing a personalized movie theater experience with
						the right equipment, customized decor, and favorite films. This
						guide helps you bring the cinema experience into your own home with
						cozy seating, dim lighting, and movie theater snacks
					</p>
				</div>
			</div>

			<div className={styles.container}>
				{movies.length === 0 ? (
					<LibraryPlug />
				) : (
					<ul className={styles.cardsList}>
						{movies.map((movie) => (
							<li key={movie.id} className={styles.cardItem}>
								<MovieCard movie={movie} source="library" />
							</li>
						))}
					</ul>
				)}
			</div>
		</article>
	);
};
