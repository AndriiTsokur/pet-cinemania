import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './WeeklyTrends.module.css';
import {
	selectService,
	selectTrendingAll,
	substituteTrendingWeek,
} from '@/redux';
import { ArticleTitle, MovieCard } from '@/components';
import {
	processFetchedImages,
	processGenres,
	randomizer,
	TrendingDataT,
} from '@/utils';

export const WeeklyTrends: React.FC = () => {
	const dispatch = useDispatch();
	const {
		screen,
		genres: { data: genres },
	} = useSelector(selectService);
	const { week, weekUpdated, dayUpdated } = useSelector(selectTrendingAll);

	useEffect(() => {
		if (week) {
			const tempRandomCardIndexes: number[] = [];
			const randomUpdatedMovies: TrendingDataT[] = [];

			while (tempRandomCardIndexes.length < screen.cardsInRow) {
				const randomIndex = randomizer({ min: 0, max: week.length });
				if (
					!tempRandomCardIndexes.includes(randomIndex) &&
					week[randomIndex].id !== dayUpdated?.id
				) {
					tempRandomCardIndexes.push(randomIndex);
				}
			}

			tempRandomCardIndexes.map((index) => {
				const { backdrop, poster } = processFetchedImages({
					screen,
					movie: week[index],
				});

				const genresArray = processGenres({ genres, movie: week[index] });
				const popularity = Number(week[index].popularity).toFixed(1);
				const vote_average = Number(week[index].vote_average).toFixed(1);

				const update: TrendingDataT = {
					...week[index],
					backdrop_url: backdrop,
					poster_url: poster,
					genres: genresArray,
					popularity,
					vote_average,
				};

				randomUpdatedMovies.push(update);
			});

			dispatch(substituteTrendingWeek(randomUpdatedMovies));
		}
	}, [screen.deviceType, week, dispatch]);

	if (!weekUpdated) return;

	return (
		<article className={styles.weeklyTrends}>
			<ArticleTitle title="Weekly Trends">
				<p>
					<NavLink to="/catalogue" className={styles.link}>
						See all
					</NavLink>
				</p>
			</ArticleTitle>

			<ul className={styles.cardsList}>
				{weekUpdated.map((movie) => (
					<li key={movie.id} className={styles.cardItem}>
						<MovieCard movie={movie} />
					</li>
				))}
			</ul>
		</article>
	);
};
