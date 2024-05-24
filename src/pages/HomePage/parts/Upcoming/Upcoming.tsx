import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Upcoming.module.css';
import { selectService, selectUpcoming } from '@/redux';
import { ArticleTitle, Button } from '@/components';
import { randomizer, showDetails } from '@/utils';
import posterPlug from '@/assets/images/poster-plug.jpg';

export const Upcoming: React.FC = () => {
	const dispatch = useDispatch();
	const {
		screen: { deviceType, movieCardHeight },
	} = useSelector(selectService);
	const { dataUpdated: movies } = useSelector(selectUpcoming);
	const [idx, setIdx] = useState(0);

	useEffect(() => {
		if (movies === null) return;

		const index = randomizer({ min: 0, max: movies.length });
		setIdx(index);
	}, [movies]);

	let image: string | undefined;
	if (movies !== null) {
		image =
			deviceType === 'mobile'
				? movies[idx].poster_url
				: movies[idx].backdrop_url;
	}

	const handleTrailerBtn = () => {
		console.log('TRAILER');
	};

	return (
		<>
			{movies && (
				<article className={styles.upcoming}>
					<ArticleTitle title="Upcoming This Month" />
					<div className={styles.container}>
						<div
							style={deviceType === 'mobile' ? { height: movieCardHeight } : {}}
							className={styles.posterContainer}
						>
							<img
								src={image ? image : posterPlug}
								className={
									deviceType === 'mobile' ? styles.poster : styles.backdrop
								}
								alt={movies[idx].title}
							/>
						</div>

						<div className={styles.infoContainer}>
							<h3 className={styles.title}>{movies[idx].title}</h3>
							<div className={styles.detailsWrapper}>
								<div className={styles.column}>
									<div className={styles.parameterName}>
										<p>Release date</p>
										<p>Vote / Votes</p>
									</div>
									<div className={styles.data}>
										<p className={styles.releaseDate}>
											{movies[idx].release_date}
										</p>
										{movies[idx].vote_count === 0 ? (
											<p>No votes yet</p>
										) : (
											<p>
												<span className={styles.votes}>
													{movies[idx].vote_average}
												</span>{' '}
												/{' '}
												<span className={styles.votes}>
													{movies[idx].vote_count}
												</span>
											</p>
										)}
									</div>
								</div>

								<div className={styles.column}>
									<div className={styles.parameterName}>
										<p>Popularity</p>
										{movies[idx].genres?.length === 1 ? (
											<p>Genre</p>
										) : (
											<p>Genres</p>
										)}
									</div>
									<div className={styles.data}>
										<p>{movies[idx].popularity}</p>
										<p>{movies[idx].genres?.join(', ')}</p>
									</div>
								</div>
							</div>

							<h4 className={styles.aboutTitle}>About</h4>
							<p className={styles.aboutText}>
								{deviceType === 'desktop' && movies[idx].overview_brief
									? movies[idx].overview_brief
									: movies[idx].overview}
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
											movieId: movies[idx].id,
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
			)}
		</>
	);
};
