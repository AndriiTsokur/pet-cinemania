import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Pagination } from '@mui/material';
import styles from './CataloguePage.module.css';
import { Hero, WeeklyTrends } from '@/components';

import { searchMoviesThunk } from '@/redux';

export const CataloguePage: React.FC = () => {
	const dispatch = useDispatch();
	// const { data: searchResults } = useSelector(selectSearchResults);

	useEffect(() => {
		dispatch<any>(searchMoviesThunk({ query: 'dune' }));
	}, [dispatch]);

	const handlePagination = (e: any) => {
		console.log(typeof e.target.innerText);
	};

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
					count={10}
					variant="outlined"
					color="primary"
					onClick={(e) => handlePagination(e)}
				/>
			</div>
		</article>
	);
};
