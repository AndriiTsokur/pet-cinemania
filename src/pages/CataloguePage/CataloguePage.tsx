import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './CataloguePage.module.css';
import { Hero, WeeklyTrends } from '@/components';

import { searchMoviesThunk } from '@/redux';

export const CataloguePage: React.FC = () => {
	const dispatch = useDispatch();
	// const { data: searchResults } = useSelector(selectSearchResults);

	useEffect(() => {
		dispatch<any>(searchMoviesThunk({ query: 'dune' }));
	}, [dispatch]);

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
		</article>
	);
};
