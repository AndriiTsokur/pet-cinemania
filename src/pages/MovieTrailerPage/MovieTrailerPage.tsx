import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './MovieTrailerPage.module.css';
import { selectDetails, selectService } from '@/redux';
import { randomizer } from '@/utils';
import { ButtonBackToDetails } from '@/components';
import { MovieTrailerPlug } from './parts/MovieTrailerPlug';

export const MovieTrailerPage: React.FC = () => {
	const { trailers } = useSelector(selectDetails);
	const {
		modal: { movieId },
	} = useSelector(selectService);

	const [trailerKey, setTrailerKey] = useState('');

	useEffect(() => {
		if (!trailers || trailers.length === 0) return;

		if (trailers.length === 1) {
			setTrailerKey(trailers[0].key);
		} else {
			const randomIndex = randomizer({ min: 0, max: trailers.length });
			setTrailerKey(trailers[randomIndex].key);
		}
	}, [trailers]);

	const trailerSource = `https://www.youtube.com/embed/${trailerKey}?rel=0&amp;controls=1&amp;showinfo=0&autoplay=1`;

	return (
		<>
			{trailers ? (
				<div className={styles.container}>
					<iframe
						src={trailerSource}
						className={styles.iframe}
						allow="autoplay"
						allowFullScreen={true}
					/>
					{movieId !== 0 && <ButtonBackToDetails />}
				</div>
			) : (
				<MovieTrailerPlug />
			)}
		</>
	);
};
