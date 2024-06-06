import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';

import styles from './CataloguePage.module.css';
import { Hero, WeeklyTrends } from '@/components';
import { processAll } from '@/utils';

import {
	fetchTrendingThunk,
	selectService,
	selectTrendingAll,
	substituteTrendingWeek,
} from '@/redux';

export const CataloguePage: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {
		screen,
		genres: { data: genres },
	} = useSelector(selectService);
	const { dayUpdated, week, weekUpdated } = useSelector(selectTrendingAll);

	const { page: pageAddress } = useParams<{ page: string }>();

	const handlePagination = (_: any, page: number) => {
		navigate(page === 1 ? '/catalogue' : `/catalogue/${page}`);

		if (week?.page !== page) {
			dispatch<any>(
				fetchTrendingThunk({
					period: 'week',
					page: pageAddress ? Number(pageAddress) : 1,
				}),
			);
		}
	};

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
	}, [dispatch, week, genres, dayUpdated]);

	return (
		<article>
			<Hero />
			<WeeklyTrends isCatalogue={true} />

			<div className={styles.selectWrapper}>
				{/* <SelectAltered
					list={actualGenres}
					label="All genres"
					onChange={handleChange}
					value={selectedGenre}
				/> */}
			</div>

			<div className={styles.paginationWrapper}>
				<Pagination
					count={500}
					variant="outlined"
					color="primary"
					disabled={!weekUpdated || weekUpdated.total_pages <= 1}
					onChange={handlePagination}
					page={pageAddress ? Number(pageAddress) : 1}
				/>
			</div>
		</article>
	);
};
