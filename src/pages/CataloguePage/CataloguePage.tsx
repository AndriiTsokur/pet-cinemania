import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './CataloguePage.module.css';
import { Hero, PaginationAltered, WeeklyTrends } from '@/components';
import { processAll } from '@/utils';

import {
	fetchTrendingThunk,
	selectService,
	selectTrendingAll,
	substituteTrendingWeek,
} from '@/redux';

export const CataloguePage: React.FC = () => {
	const dispatch = useDispatch();
	const {
		screen,
		genres: { data: genres },
	} = useSelector(selectService);
	const { dayUpdated, week, weekUpdated } = useSelector(selectTrendingAll);

	const { page: pageAddress } = useParams<{ page: string }>();

	const currentPage = pageAddress ? Number(pageAddress) : 1;

	useEffect(() => {
		if (!week || week.page !== currentPage) {
			dispatch<any>(fetchTrendingThunk({ period: 'week', page: currentPage }));
		}
	}, [dispatch, week, currentPage]);

	useEffect(() => {
		if (week && genres && dayUpdated) {
			const update = processAll({
				categoryName: 'week',
				categoryResults: week.results,
				screen,
				genres,
				dayUpdated,
				isCatalogue: true,
			});

			dispatch(substituteTrendingWeek(update));
		}
	}, [dispatch, week, genres, dayUpdated, screen]);

	return (
		<article>
			<Hero />
			<PaginationAltered data={weekUpdated} pageName="catalogue" />
			<WeeklyTrends isCatalogue={true} weekUpdatedProp={weekUpdated} />

			<div className={styles.selectWrapper}>
				{/* <SelectAltered
					list={actualGenres}
					label="All genres"
					onChange={handleChange}
					value={selectedGenre}
				/> */}
			</div>

			<PaginationAltered data={weekUpdated} pageName="catalogue" />
		</article>
	);
};
