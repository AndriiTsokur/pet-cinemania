import { toggleModal, uploadDetails } from '@/redux';
import { MoviesResultsT } from '@/utils';

type ParamsT = {
	modalType: string;
	movie: MoviesResultsT;
	dispatch: any;
};

export const showDetails = ({ modalType, movie, dispatch }: ParamsT) => {
	dispatch(uploadDetails(movie));
	dispatch(toggleModal({ modalType, movieId: movie.id }));
};
