import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
	Hero,
	PaginationAltered,
	SearchForm,
	WeeklyTrends,
} from '@/components';
import { processAll } from '@/utils';
import {
	fetchTrendingThunk,
	selectService,
	selectSearchMovies,
	selectTrendingAll,
	searchMoviesThunk,
	substituteSearchMovies,
	substituteTrendingWeek,
} from '@/redux';

export const CataloguePage: React.FC = () => {
	const dispatch = useDispatch();
	const {
		screen,
		genres: { data: genres },
	} = useSelector(selectService);
	const { dayUpdated, week, weekUpdated } = useSelector(selectTrendingAll);
	const {
		query: searchQuery,
		data: searchData,
		dataUpdated: searchDataUpdated,
	} = useSelector(selectSearchMovies);

	const { page: pageAddress } = useParams<{ page: string }>();

	const currentPage = pageAddress ? Number(pageAddress) : 1;

	useEffect(() => {
		if (!week || week.page !== currentPage) {
			dispatch<any>(fetchTrendingThunk({ period: 'week', page: currentPage }));
		}
	}, [dispatch, week, currentPage]);

	useEffect(() => {
		if (searchData?.page !== currentPage) {
			dispatch<any>(
				searchMoviesThunk({ query: searchQuery, page: currentPage }),
			);
		}
	}, [dispatch, searchData, currentPage]);

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

	const handleSubmit = (inputState: string) => {
		dispatch<any>(searchMoviesThunk({ query: inputState }));
	};

	useEffect(() => {
		if (searchData && genres && dayUpdated) {
			const update = processAll({
				categoryName: 'week',
				categoryResults: searchData.results,
				screen,
				genres,
				dayUpdated,
				isCatalogue: true,
			});

			dispatch(substituteSearchMovies(update));
		}
	}, [dispatch, searchData, genres, dayUpdated, screen]);

	return (
		<article>
			<Hero />
			<SearchForm onSubmit={handleSubmit} />

			{!searchQuery ? (
				<>
					<PaginationAltered
						pageName="catalogue"
						totalPages={weekUpdated ? weekUpdated.total_pages / 2 : 0}
					/>
					<WeeklyTrends isCatalogue={true} weekUpdatedProp={weekUpdated} />
					<PaginationAltered
						pageName="catalogue"
						totalPages={weekUpdated ? weekUpdated.total_pages / 2 : 0}
					/>
				</>
			) : (
				<>
					<PaginationAltered
						pageName="catalogue"
						totalPages={searchDataUpdated ? searchDataUpdated.total_pages : 0}
					/>
					<WeeklyTrends
						isCatalogue={true}
						weekUpdatedProp={searchDataUpdated}
					/>
					<PaginationAltered
						pageName="catalogue"
						totalPages={searchDataUpdated ? searchDataUpdated.total_pages : 0}
					/>
				</>
			)}
		</article>
	);
};
