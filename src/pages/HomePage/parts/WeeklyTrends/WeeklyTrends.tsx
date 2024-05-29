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
import { processAll } from '@/utils';

export const WeeklyTrends: React.FC = () => {
	const dispatch = useDispatch();
	const {
		screen,
		genres: { data: genres },
	} = useSelector(selectService);
	const { week, weekUpdated, dayUpdated } = useSelector(selectTrendingAll);

	useEffect(() => {
		if (week && genres && dayUpdated) {
			const update = processAll({
				categoryName: 'week',
				categoryData: week,
				screen,
				genres,
				dayUpdated,
			});

			dispatch(substituteTrendingWeek(update));
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
