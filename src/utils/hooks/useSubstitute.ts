import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectService } from '@/redux';
import { TrendingDataT } from '../slicesStateTypes';
import posterPlug from '@/assets/images/poster-plug.jpg';

type ParamsT = {
	selector: any;
	action: any;
	dependencies: any[];
};

export const useSubstitute = ({ selector, action, dependencies }: ParamsT) => {
	const dispatch = useDispatch();
	const {
		screen: { deviceType } = {},
		apiConfig: { data: apiConfig } = {},
		genres: { data: genres } = {},
	} = useSelector(selectService);

	const substituteMovieData = (movie: TrendingDataT) => {
		const updatedData = {
			backdrop: '',
			poster: '',
			genresText: [] as string[],
			overview: '',
			popularity: 0,
		};

		const backdropImage =
			movie.backdrop_path === null ? posterPlug : movie.backdrop_path;
		const posterImage =
			movie.poster_path === null ? posterPlug : movie.poster_path;

		if (movie.backdrop_path === null) {
			updatedData.backdrop = posterPlug;
		} else if (movie.poster_path === null) {
			updatedData.poster = posterPlug;
		} else if (deviceType === 'desktop') {
			updatedData.backdrop = `${apiConfig?.secure_base_url}${apiConfig?.backdrop_sizes[2]}${backdropImage}`;
			updatedData.poster = `${apiConfig?.secure_base_url}${apiConfig?.poster_sizes[4]}${posterImage}`;
		} else {
			updatedData.backdrop = `${apiConfig?.secure_base_url}${apiConfig?.backdrop_sizes[1]}${backdropImage}`;
			updatedData.poster = `${apiConfig?.secure_base_url}${apiConfig?.poster_sizes[3]}${posterImage}`;
		}

		if (movie.genre_ids.length === 0) {
			updatedData.genresText.push('Not specified');
		} else {
			movie.genre_ids.map((id) => {
				const genre = genres?.find((item) => item.id === id);
				if (genre) updatedData.genresText.push(genre.name);
			});
		}

		updatedData.overview = movie.overview
			? movie.overview
			: 'Overview not provided';

		updatedData.popularity = Number(movie.popularity.toFixed(1));

		return updatedData;
	};

	const updateMovieData = (stateLink: TrendingDataT[]) => {
		return stateLink.map((item) => {
			const updatedItem = substituteMovieData(item);
			return {
				...item,
				backdrop_url: updatedItem.backdrop,
				poster_url: updatedItem.poster,
				genres: updatedItem.genresText,
				overview: updatedItem.overview,
				popularity: updatedItem.popularity,
			};
		});
	};

	useEffect(() => {
		if (selector === null) return;

		const updatedData = updateMovieData(selector);
		dispatch(action(updatedData));
	}, [...dependencies]);
};
