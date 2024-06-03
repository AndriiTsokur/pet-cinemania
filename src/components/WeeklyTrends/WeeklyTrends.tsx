import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './WeeklyTrends.module.css';
import {
	fetchGenresThunk,
	fetchTrendingThunk,
	selectService,
	selectTrendingAll,
	substituteTrendingWeek,
} from '@/redux';
import { ArticleTitle, MovieCard, Loader } from '@/components';
import { processAll } from '@/utils';

type PropsT = {
	isCatalogue?: boolean;
};

export const WeeklyTrends: React.FC<PropsT> = ({ isCatalogue }) => {
	const dispatch = useDispatch();
	const {
		screen,
		genres: { data: genres },
	} = useSelector(selectService);
	const { week, weekUpdated, dayUpdated } = useSelector(selectTrendingAll);

	useEffect(() => {
		if (!genres) dispatch<any>(fetchGenresThunk());
		if (!week) dispatch<any>(fetchTrendingThunk('week'));
	}, [dispatch, genres, week]);

	useEffect(() => {
		if (week && genres && dayUpdated) {
			const update = processAll({
				categoryName: 'week',
				categoryData: week,
				screen,
				genres,
				dayUpdated,
				isCatalogue,
			});

			dispatch(substituteTrendingWeek(update));
		}
	}, [dispatch, week, genres, dayUpdated]);

	if (!weekUpdated) return <Loader />;

	return (
		<article className={styles.weeklyTrends}>
			{!isCatalogue && (
				<ArticleTitle title="Weekly Trends">
					<p>
						<NavLink to="/catalogue" className={styles.link}>
							See all
						</NavLink>
					</p>
				</ArticleTitle>
			)}

			<ul className={styles.cardsList}>
				{weekUpdated.map((movie) => (
					<li key={movie.id} className={styles.cardItem}>
						<MovieCard movie={movie} source="week" />
					</li>
				))}
			</ul>
		</article>
	);
};
