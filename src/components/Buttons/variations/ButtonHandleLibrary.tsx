import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components';
import { addToLibrary, deleteFromLibrary, selectLocal } from '@/redux';
import { TrendingDataT } from '@/utils';

type PropsT = {
	movie: TrendingDataT;
	isGradient: boolean;
};

export const ButtonHandleLibrary: React.FC<PropsT> = ({
	movie,
	isGradient,
}) => {
	const dispatch = useDispatch();
	const { movies } = useSelector(selectLocal);

	const isPresent = movies.find((item: TrendingDataT) => item.id === movie.id);

	const handleClick = () => {
		if (isPresent) {
			dispatch(deleteFromLibrary({ id: movie.id }));
		} else {
			dispatch(addToLibrary(movie));
		}
	};

	return (
		<Button isGradient={isGradient} onClick={handleClick}>
			{isPresent ? 'Delete from library' : 'Add to my library'}
		</Button>
	);
};