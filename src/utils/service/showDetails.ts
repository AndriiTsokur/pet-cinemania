import { toggleModal, uploadDetails } from '@/redux';
import { TrendingDataT } from '@/utils';

type ParamsT = {
	modalType: string;
	movie: TrendingDataT;
	dispatch: any;
};

export const showDetails = ({ modalType, movie, dispatch }: ParamsT) => {
	dispatch(uploadDetails(movie));
	dispatch(toggleModal({ modalType, movieId: movie.id }));
};
