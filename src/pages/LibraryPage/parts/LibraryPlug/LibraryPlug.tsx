import { useNavigate } from 'react-router-dom';
import { Button, NoMoviesPlug } from '@/components';

export const LibraryPlug: React.FC = () => {
	const navigate = useNavigate();

	return (
		<NoMoviesPlug message="You don’t have any movies at your library">
			<Button isGradient={true} onClick={() => navigate('/catalogue')}>
				Search movies
			</Button>
		</NoMoviesPlug>
	);
};
