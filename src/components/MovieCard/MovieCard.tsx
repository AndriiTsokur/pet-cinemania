import { useDispatch, useSelector } from 'react-redux';

import styles from './MovieCard.module.css';
import { selectSearchMovies, selectService, selectTrendingAll } from '@/redux';
import { StarsRating } from '@/components';
import { showDetails, MoviesResultsT } from '@/utils';
import posterPlug from '@/assets/images/poster-plug.jpg';

type PropsT = {
	movie: MoviesResultsT;
	source: 'library' | 'week';
};

export const MovieCard: React.FC<PropsT> = ({ movie, source }) => {
	const dispatch = useDispatch();
	const {
		screen: { movieCardHeight },
	} = useSelector(selectService);
	const { weekUpdated: movies } = useSelector(selectTrendingAll);
	const { dataUpdated: foundedMovies } = useSelector(selectSearchMovies);

	let cardBg = {};
	if (
		(source === 'week' && (movies || foundedMovies)) ||
		source === 'library'
	) {
		cardBg = {
			height: movieCardHeight,
			backgroundImage: `linear-gradient(180.00deg, rgba(0, 0, 0, 0) 63.48%,rgba(0, 0, 0, 0.9) 92.161%), url(${movie.poster_url})`,
		};
	} else {
		cardBg = {
			height: movieCardHeight,
			backgroundImage: `linear-gradient(180.00deg, rgba(0, 0, 0, 0) 63.48%,rgba(0, 0, 0, 0.9) 92.161%), url(${posterPlug})`,
		};
	}

	return (
		<>
			{((source === 'week' && (movies || foundedMovies)) ||
				source === 'library') && (
				<section
					className={styles.section}
					style={cardBg}
					onClick={() =>
						showDetails({
							modalType: 'details',
							movie,
							dispatch,
						})
					}
				>
					<div className={styles.infoWrapper}>
						<h3 className={styles.movieTitle}>{movie.title}</h3>
						<div className={styles.detailsWrapper}>
							<p className={styles.details}>
								{movie.genres?.join(', ')}&nbsp;|{' '}
								{movie.release_date.slice(0, 4)}
							</p>
							<div className={styles.starsWrapper}>
								<StarsRating value={movie.vote_average} />
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
};
