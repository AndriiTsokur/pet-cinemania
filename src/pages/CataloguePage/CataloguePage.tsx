import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
	setQuery,
} from '@/redux';

export const CataloguePage: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const {
		screen,
		genres: { data: genres },
	} = useSelector(selectService);
	const { dayUpdated, week, weekUpdated } = useSelector(selectTrendingAll);
	const { data: searchData, dataUpdated: searchDataUpdated } =
		useSelector(selectSearchMovies);

	const [inputState, setInputState] = useState(searchParams.get('query') || '');

	const currentPage = searchParams.get('page')
		? Number(searchParams.get('page'))
		: 1;
	const query = searchParams.get('query') || '';

	useEffect(() => {
		if (query) {
			dispatch(setQuery(query));
		}
	}, [dispatch, query]);

	useEffect(() => {
		setInputState(query);
	}, [query]);

	useEffect(() => {
		if (!query && (!week || week.page !== currentPage)) {
			dispatch<any>(fetchTrendingThunk({ period: 'week', page: currentPage }));
		}
	}, [dispatch, week, currentPage, query]);

	useEffect(() => {
		if (query && searchData?.page !== currentPage) {
			dispatch<any>(searchMoviesThunk({ query, page: currentPage }));
		}
	}, [dispatch, searchData, currentPage, query]);

	useEffect(() => {
		if (week && genres && dayUpdated && !query) {
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
	}, [dispatch, week, genres, dayUpdated, screen, query]);

	const handleSubmit = (inputState: string) => {
		dispatch(setQuery(inputState));
		dispatch<any>(searchMoviesThunk({ query }));
		navigate(`/catalogue?query=${inputState}&page=1`);
	};

	useEffect(() => {
		if (searchData && genres && dayUpdated && query) {
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
	}, [dispatch, searchData, genres, dayUpdated, screen, query]);

	return (
		<article>
			<Hero />
			<SearchForm onSubmit={handleSubmit} initialQuery={inputState} />

			{!query ? (
				<>
					<PaginationAltered
						pageName="catalogue"
						totalPages={weekUpdated ? weekUpdated.total_pages : 0}
					/>
					<WeeklyTrends isCatalogue={true} weekUpdatedProp={weekUpdated} />
					<PaginationAltered
						pageName="catalogue"
						totalPages={weekUpdated ? weekUpdated.total_pages : 0}
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
