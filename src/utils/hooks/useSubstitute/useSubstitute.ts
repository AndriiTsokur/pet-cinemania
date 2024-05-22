import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectService } from '@/redux';
import { substituteMovieData } from './tools';
import { TrendingDataT } from '../../slicesStateTypes';

type HookParamsT = {
	selector: any;
	action: any;
	dependencies: any[];
};

export const useSubstitute = ({
	selector,
	action,
	dependencies,
}: HookParamsT) => {
	const dispatch = useDispatch();
	const {
		screen: { deviceType } = {},
		apiConfig: { data: apiConfig } = {},
		genres: { data: genres } = {},
	} = useSelector(selectService);

	const updateMovieData = (stateLink: TrendingDataT[]) => {
		return stateLink.map((item) => {
			const updatedItem = substituteMovieData({
				movie: item,
				deviceType,
				apiConfig,
				genres,
			});
			return {
				...item,
				backdrop_url: updatedItem.backdrop,
				poster_url: updatedItem.poster,
				genres: updatedItem.genresText,
				overview: updatedItem.overview,
				overview_brief: updatedItem.overview_brief,
				popularity: updatedItem.popularity,
				vote_average: updatedItem.vote_average,
			};
		});
	};

	useEffect(() => {
		if (selector === null) return;

		const updatedData = updateMovieData(selector);
		dispatch(action(updatedData));
	}, [...dependencies]);
};
