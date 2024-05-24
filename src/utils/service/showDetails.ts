import { fetchDetailsThunk, toggleModal } from '@/redux';

type ParamsT = {
	modalType: string;
	movieId: number;
	dispatch: any;
};

export const showDetails = ({ modalType, movieId, dispatch }: ParamsT) => {
	dispatch(fetchDetailsThunk(movieId));
	dispatch(toggleModal({ modalType, movieId }));
};
