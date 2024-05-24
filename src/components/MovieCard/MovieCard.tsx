import { useDispatch, useSelector } from 'react-redux';

import styles from './MovieCard.module.css';
import { selectService, selectTrendingAll } from '@/redux';
import { StarsRating } from '@/components';
import { showDetails } from '@/utils';

type PropsT = {
	index: number;
};

export const MovieCard: React.FC<PropsT> = ({ index }) => {
	const dispatch = useDispatch();
	const {
		screen: { movieCardHeight },
	} = useSelector(selectService);
	const { weekUpdated: movies } = useSelector(selectTrendingAll);

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
					onClick={() =>
						showDetails({
							modalType: 'details',
							movieId: movies[index].id,
							dispatch,
						})
					}
				>
					<div className={styles.infoWrapper}>
						<h3 className={styles.movieTitle}>{movies[index].title}</h3>
						<div className={styles.detailsWrapper}>
							<p className={styles.details}>
								{movies[index].genres?.join(', ')}&nbsp;|{' '}
								{movies[index].release_date.slice(0, 4)}
							</p>
							<div className={styles.starsWrapper}>
								<StarsRating idx={index} />
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
};
