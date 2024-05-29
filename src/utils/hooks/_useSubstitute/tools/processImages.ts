import { ApiConfigDataT, DetailsDataT, TrendingDataT } from '@/utils';
import posterPlug from '@/assets/images/poster-plug.jpg';

type ParamsT = {
	movie: TrendingDataT | DetailsDataT;
	deviceType: string | null | undefined;
	apiConfig: ApiConfigDataT | null | undefined;
};

export const processImages = ({ movie, deviceType, apiConfig }: ParamsT) => {
	const updatedData = {
		backdrop: '',
		poster: '',
	};

	// Processing backdrop image
	if (!movie.backdrop_path) {
		updatedData.backdrop = posterPlug;
	} else if (deviceType === 'desktop') {
		updatedData.backdrop = `${apiConfig?.secure_base_url}${apiConfig?.backdrop_sizes[2]}${movie.backdrop_path}`;
	} else {
		updatedData.backdrop = `${apiConfig?.secure_base_url}${apiConfig?.backdrop_sizes[1]}${movie.backdrop_path}`;
	}

	// Processing poster image
	if (!movie.poster_path) {
		updatedData.poster = posterPlug;
	} else if (deviceType === 'desktop') {
		updatedData.poster = `${apiConfig?.secure_base_url}${apiConfig?.poster_sizes[4]}${movie.poster_path}`;
	} else {
		updatedData.poster = `${apiConfig?.secure_base_url}${apiConfig?.poster_sizes[3]}${movie.poster_path}`;
	}

	return updatedData;
};
