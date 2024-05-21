import { useSelector } from 'react-redux';

import styles from './MovieCard.module.css';
import { selectService, selectTrendingWeekUpdated } from '@/redux';
import starsMockup from '@/assets/images/stars-mockup.svg';

type PropsT = {
	index: number;
};

export const MovieCard: React.FC<PropsT> = ({ index }) => {
	const {
		screen: { movieCardHeight },
	} = useSelector(selectService);
	const movies = useSelector(selectTrendingWeekUpdated);

	let cardBg = {};
	if (movies !== null) {
		cardBg = {
			height: movieCardHeight,
			backgroundImage: `linear-gradient(180.00deg, rgba(0, 0, 0, 0) 63.48%,rgba(0, 0, 0, 0.9) 92.161%), url(${movies[index].poster_url})`,
		};
	}

	return (
		<>
			{movies && (
				<section
					className={styles.section}
					style={cardBg}
					onClick={() => console.log('MODAL')}
				>
					<div className={styles.infoWrapper}>
						<h3 className={styles.movieTitle}>{movies[index].title}</h3>
						<div className={styles.detailsWrapper}>
							<p className={styles.details}>
								{movies[index].genres?.join(', ')}&nbsp;|{' '}
								{movies[index].release_date.slice(0, 4)}
							</p>
							<div className={styles.starsWrapper}>
								<img src={starsMockup} className={styles.stars} alt="Stars" />
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
};
