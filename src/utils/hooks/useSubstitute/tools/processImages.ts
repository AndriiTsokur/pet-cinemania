import { ApiConfigDataT, TrendingDataT } from '@/utils';
import posterPlug from '@/assets/images/poster-plug.jpg';

type ParamsT = {
	movie: TrendingDataT;
	deviceType: string | null | undefined;
	apiConfig: ApiConfigDataT | null | undefined;
};

export const processImages = ({ movie, deviceType, apiConfig }: ParamsT) => {
	const updatedData = {
		backdrop: '',
		poster: '',
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

	return updatedData;
};
