import { NoMoviesPlug, PaginationAltered, WeeklyTrends } from '@/components';
import { MoviesDataT } from '@/utils';

type PropsT = {
	data: MoviesDataT | null;
};

export const SearchResults: React.FC<PropsT> = ({ data }) => {
	if (!data || data.results.length === 0) {
		return (
			<NoMoviesPlug message="We don’t have any results matching your search" />
		);
	}

	return (
		<>
			<PaginationAltered
				pageName="catalogue"
				totalPages={data ? data.total_pages : 0}
			/>

			<WeeklyTrends isCatalogue={true} weekUpdatedProp={data} />

			<PaginationAltered
				pageName="catalogue"
				totalPages={data ? data.total_pages : 0}
			/>
		</>
	);
};
