import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Upcoming.module.css';
import { selectService, selectUpcoming, substituteUpcoming } from '@/redux';
import { ArticleTitle, Button } from '@/components';
import { processAll, showDetails } from '@/utils';

export const Upcoming: React.FC = () => {
	const dispatch = useDispatch();
	const {
		screen,
		genres: { data: genres },
	} = useSelector(selectService);
	const { data: upcoming, dataUpdated: upcomingUpdated } =
		useSelector(selectUpcoming);

	useEffect(() => {
		if (upcoming && genres) {
			const update = processAll({
				categoryName: 'upcoming',
				categoryData: upcoming,
				screen,
				genres,
			});

			dispatch(substituteUpcoming(update));
		}
	}, [screen.deviceType, upcoming, dispatch]);

	let image = '';
	if (upcomingUpdated) {
		image =
			screen.deviceType === 'mobile'
				? upcomingUpdated.poster_url || ''
				: upcomingUpdated.backdrop_url || '';
	}

	const handleTrailerBtn = () => {
		console.log('TRAILER');
	};

	if (!upcomingUpdated) return;

	return (
		<article className={styles.upcoming}>
			<ArticleTitle title="Upcoming This Month" />
			<div className={styles.container}>
				<div
					style={
						screen.deviceType === 'mobile'
							? { height: screen.movieCardHeight }
							: {}
					}
					className={styles.posterContainer}
				>
					<img
						src={image}
						className={
							screen.deviceType === 'mobile' ? styles.poster : styles.backdrop
						}
						alt={upcomingUpdated.title}
					/>
				</div>

				<div className={styles.infoContainer}>
					<h3 className={styles.title}>{upcomingUpdated.title}</h3>
					<div className={styles.detailsWrapper}>
						<div className={styles.column}>
							<div className={styles.parameterName}>
								<p>Release date</p>
								<p>Vote / Votes</p>
							</div>
							<div className={styles.data}>
								<p className={styles.releaseDate}>
									{upcomingUpdated.release_date}
								</p>
								{upcomingUpdated.vote_count === 0 ? (
									<p>No votes yet</p>
								) : (
									<p>
										<span className={styles.votes}>
											{upcomingUpdated.vote_average}
										</span>{' '}
										/{' '}
										<span className={styles.votes}>
											{upcomingUpdated.vote_count}
										</span>
									</p>
								)}
							</div>
						</div>

						<div className={styles.column}>
							<div className={styles.parameterName}>
								<p>Popularity</p>
								{upcomingUpdated.genres?.length === 1 ? (
									<p>Genre</p>
								) : (
									<p>Genres</p>
								)}
							</div>
							<div className={styles.data}>
								<p>{upcomingUpdated.popularity}</p>
								<p>{upcomingUpdated.genres?.join(', ')}</p>
							</div>
						</div>
					</div>

					<h4 className={styles.aboutTitle}>About</h4>
					<p className={styles.aboutText}>
						{screen.deviceType === 'desktop' && upcomingUpdated.overview_brief
							? upcomingUpdated.overview_brief
							: upcomingUpdated.overview}
					</p>

					<div className={styles.btnWrapper}>
						<Button isGradient={true} onClick={handleTrailerBtn}>
							Watch trailer
						</Button>
						<Button
							isGradient={false}
							onClick={() =>
								showDetails({
									modalType: 'details',
									movie: upcomingUpdated,
									dispatch,
								})
							}
						>
							More details
						</Button>
					</div>
				</div>
			</div>
		</article>
	);
};
