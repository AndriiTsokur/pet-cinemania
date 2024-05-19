import { useDispatch, useSelector } from 'react-redux';
import {
	defineDirectURLs,
	selectService,
	selectTrendingDay,
	selectTrendingWeek,
} from '@/redux';
import { TrendingDataT } from '@/utils/slicesStateTypes';

export const useSubstitute = () => {
	const dispatch = useDispatch();
	const {
		screen: { deviceType },
		apiConfig: { data } = {},
		genres: { data: genresArr } = {},
	} = useSelector(selectService);
	const trendingDay = useSelector(selectTrendingDay);
	const trendingWeek = useSelector(selectTrendingWeek);

	const substituteURL = (movie: TrendingDataT) => {
		const updated = {
			backdrop: '',
			poster: '',
			genres: [] as string[],
		};

		if (deviceType === 'desktop') {
			updated.backdrop = `${data?.base_url}${data?.backdrop_sizes[2]}${movie.backdrop_path}`;
			updated.poster = `${data?.base_url}${data?.poster_sizes[4]}${movie.poster_path}`;
		} else {
			updated.backdrop = `${data?.base_url}${data?.backdrop_sizes[1]}${movie.backdrop_path}`;
			updated.poster = `${data?.base_url}${data?.poster_sizes[3]}${movie.poster_path}`;
		}

		movie.genre_ids.map((id) => {
			const genre = genresArr?.find((item) => item.id === id);
			if (genre) updated.genres.push(genre.name);
		});

		return updated;
	};

	const updatedDay = trendingDay?.map((item) => {
		const updated = substituteURL(item);
		return {
			...item,
			backdrop_url: updated.backdrop,
			poster_url: updated.poster,
			genres: updated.genres,
		};
	});

	const updatedWeek = trendingWeek?.map((item) => {
		const updated = substituteURL(item);
		return {
			...item,
			backdrop_url: updated.backdrop,
			poster_url: updated.poster,
			genres: updated.genres,
		};
	});

	dispatch(defineDirectURLs({ updatedDay, updatedWeek }));
};
