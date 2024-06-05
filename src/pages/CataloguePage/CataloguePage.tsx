import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import styles from './CataloguePage.module.css';
import { Hero, Loader, WeeklyTrends } from '@/components';

import {
	fetchTrendingThunk,
	// searchMoviesThunk,
	selectTrendingAll,
} from '@/redux';

export const CataloguePage: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { page: pageAddress } = useParams<{ page: string }>();
	const { dayUpdated, weekUpdated } = useSelector(selectTrendingAll);
	// const { data: searchResults } = useSelector(selectSearchResults);

	const initialPage = pageAddress ? Number(pageAddress) : 1;
	const [currentPage, setCurrentPage] = useState(initialPage);

	// useEffect(() => {
	// 	dispatch<any>(searchMoviesThunk({ query: 'dune' }));
	// }, [dispatch]);

	const handlePagination = (_: any, page: number) => {
		navigate(page === 1 ? '/catalogue' : `/catalogue/${page}`);
	};

	useEffect(() => {
		if (pageAddress && currentPage !== Number(pageAddress)) {
			setCurrentPage(Number(pageAddress));
			console.log(`Fetch page ${pageAddress}`);
			dispatch<any>(
				fetchTrendingThunk({ period: 'week', page: Number(pageAddress) }),
			);
		}
	}, [dispatch, pageAddress]);

	if (!dayUpdated || !weekUpdated) return <Loader />;

	return (
		<article>
			<Hero />

			<div className={styles.selectWrapper}>
				{/* <SelectAltered
					list={actualGenres}
					label="All genres"
					onChange={handleChange}
					value={selectedGenre}
				/> */}
			</div>

			<WeeklyTrends isCatalogue={true} />

			<div className={styles.paginationWrapper}>
				<Pagination
					count={weekUpdated?.total_pages}
					variant="outlined"
					color="primary"
					disabled={!weekUpdated || weekUpdated.total_pages <= 1}
					onChange={handlePagination}
					page={currentPage}
				/>
			</div>
		</article>
	);
};
