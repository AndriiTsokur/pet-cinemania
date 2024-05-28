import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Hero.module.css';
import {
	fetchTrendingThunk,
	selectService,
	selectTrendingAll,
	substituteTrendingDay,
} from '@/redux';
import { HeroPlug } from './parts';
import { Button, StarsRating } from '@/components';
import {
	processFetchedImages,
	processOverview,
	randomizer,
	showDetails,
} from '@/utils';

export const Hero: React.FC = () => {
	const dispatch = useDispatch();
	const { screen } = useSelector(selectService);
	const { day, dayUpdated } = useSelector(selectTrendingAll);

	useEffect(() => {
		if (!day) dispatch<any>(fetchTrendingThunk('day'));
	}, [dispatch, day]);

	useEffect(() => {
		if (day) {
			const randomIndex = randomizer({ min: 0, max: day.length });

			const { backdrop, poster } = processFetchedImages({
				screen,
				movie: day[randomIndex],
			});

			const { overview, overview_brief } = processOverview({
				movie: day[randomIndex],
				deviceType: screen.deviceType,
			});

			const update = {
				...day[randomIndex],
				backdrop_url: backdrop,
				poster_url: poster,
				overview,
				overview_brief,
			};

			dispatch(substituteTrendingDay(update));
		}
	}, [screen.deviceType, day, dispatch]);

	let heroBg = {};
	if (dayUpdated) {
		heroBg = {
			backgroundImage: `linear-gradient(68.84deg, rgb(17, 17, 17) 36.846%, rgba(17, 17, 17, 0) 60.047%), url(${dayUpdated.backdrop_url})`,
		};
	}

	const handleTrailerBtn = () => {
		console.log('TRAILER');
	};

	return (
		<>
			{dayUpdated ? (
				<article className={styles.hero} style={heroBg}>
					<div className={styles.container}>
						<div className={styles.textWrapper}>
							<h1 className={styles.titleStars}>{dayUpdated.title}</h1>
							<div className={styles.starsWrapper}>
								<StarsRating value={dayUpdated.vote_average} />
							</div>
							<p className={styles.text}>
								{dayUpdated.overview_brief
									? dayUpdated.overview_brief
									: dayUpdated.overview}
							</p>
						</div>

						<div className={styles.btnWrapper}>
							<Button isGradient={true} onClick={handleTrailerBtn}>
								Watch trailer
							</Button>
							<Button
								isGradient={false}
								isOutOfColorMode={true}
								onClick={() =>
									showDetails({
										modalType: 'details',
										movieId: dayUpdated.id,
										dispatch,
									})
								}
							>
								More details
							</Button>
						</div>
					</div>
				</article>
			) : (
				<HeroPlug />
			)}
		</>
	);
};
