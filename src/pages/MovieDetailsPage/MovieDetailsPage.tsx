import { useSelector } from 'react-redux';

import styles from './MovieDetailsPage.module.css';
import { selectDetails, selectService } from '@/redux';
import { Button, Modal } from '@/components';

export const MovieDetailsPage: React.FC = () => {
	const {
		screen: { deviceType, movieCardHeight },
	} = useSelector(selectService);
	const { data: movie } = useSelector(selectDetails);

	if (!movie) return;

	const handleTrailerBtn = () => console.log('Trailer');
	const handleAddBtn = () => console.log('Add');

	return (
		<Modal>
			<div className={styles.container}>
				<div
					style={deviceType === 'mobile' ? { height: movieCardHeight } : {}}
					className={styles.posterContainer}
				>
					<img
						src={movie.poster_url}
						className={styles.poster}
						alt={movie.title}
					/>
				</div>

				<div className={styles.infoContainer}>
					<h3 className={styles.title}>{movie.title}</h3>
					<div className={styles.detailsWrapper}>
						<div className={styles.parameterName}>
							<p>Release date</p>
							<p>Vote / Votes</p>
							<p>Popularity</p>
							{movie.genres?.length === 1 ? <p>Genre</p> : <p>Genres</p>}
						</div>
						<div className={styles.data}>
							<p className={styles.releaseDate}>{movie.release_date}</p>
							{movie.vote_count === 0 ? (
								<p>No votes yet</p>
							) : (
								<p>
									<span className={styles.votes}>{movie.vote_average}</span> /{' '}
									<span className={styles.votes}>{movie.vote_count}</span>
								</p>
							)}
							<p>{movie.popularity}</p>
							<p>{movie.genres?.join(', ')}</p>
						</div>
					</div>

					<h4 className={styles.aboutTitle}>About</h4>
					<p className={styles.aboutText}>{movie.overview}</p>

					<div className={styles.btnWrapper}>
						<Button isGradient={true} onClick={handleTrailerBtn}>
							Watch trailer
						</Button>
						<Button isGradient={false} onClick={handleAddBtn}>
							Add to my library
						</Button>
					</div>
				</div>
			</div>
		</Modal>
	);
};
