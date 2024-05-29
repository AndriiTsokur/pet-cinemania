import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components';
import {
	changeModalType,
	fetchTrailersThunk,
	selectService,
	toggleModal,
} from '@/redux';
import { AppDispatch } from '@/redux';

type PropsT = {
	movieId: number;
};

export const ButtonWatchTrailer: React.FC<PropsT> = ({ movieId }) => {
	const dispatch = useDispatch<AppDispatch>();
	const {
		modal: { modalIsOpen },
	} = useSelector(selectService);

	const handleClick = () => {
		dispatch(fetchTrailersThunk(movieId));

		if (modalIsOpen) {
			dispatch(changeModalType('video'));
		} else {
			dispatch(toggleModal('video'));
		}
	};
	return (
		<Button isGradient={true} onClick={handleClick}>
			Watch trailer
		</Button>
	);
};
