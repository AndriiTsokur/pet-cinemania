import { useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import { selectTrendingAll, selectService } from '@/redux';

const Stars = styled(Rating)({
	'& .MuiRating-iconFilled': {
		color: '#f89f19',
	},
	'& .MuiRating-iconEmpty': {
		color: '#f89f19',
	},
});

type PropsT = {
	value: number;
};

export const StarsRating: React.FC<PropsT> = ({ value }) => {
	const { dayUpdated: movies } = useSelector(selectTrendingAll);
	const {
		screen: { deviceType },
	} = useSelector(selectService);

	if (movies === null) return;

	const starsSize = deviceType === 'desktop' ? 'medium' : 'small';
	const starsValue = value / 2;

	return (
		<Stars
			name="stars"
			value={starsValue}
			precision={0.5}
			size={starsSize}
			readOnly
		/>
	);
};
