import { useDispatch } from 'react-redux';
import { Button } from '@/components';
import { changeModalType } from '@/redux';
import { AppDispatch } from '@/redux';

export const ButtonBackToDetails: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();

	const handleClick = () => dispatch(changeModalType('details'));

	return (
		<Button isGradient={true} onClick={handleClick}>
			Back to details
		</Button>
	);
};
