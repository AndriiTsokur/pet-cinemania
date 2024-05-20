import { useSelector } from 'react-redux';

import styles from './MovieCard.module.css';
import { selectService, selectTrendingWeek } from '@/redux';
import cardMockup from '@/assets/images/card-mockup.jpg';
import starsMockup from '@/assets/images/stars-mockup.svg';

type PropsT = {
	index: number;
};

export const MovieCard: React.FC<PropsT> = ({ index }) => {
	const {
		screen: { deviceType, movieCardHeight },
		apiConfig: { data: apiConfig } = {},
		genres: { data: genresArr } = {},
	} = useSelector(selectService);
	const movie = useSelector(selectTrendingWeek);
	const genresText: string[] = [];

	const poster =
		deviceType === 'desktop'
			? `${apiConfig?.secure_base_url}${apiConfig?.poster_sizes[4]}${movie![index].poster_path}`
			: `${apiConfig?.secure_base_url}${apiConfig?.poster_sizes[3]}${movie![index].poster_path}`;

	movie![index].genre_ids.map((id) => {
		const genre = genresArr?.find((item) => item.id === id);
		if (genre) genresText.push(genre.name);
	});

	const cardBackground = {
		height: movieCardHeight,
		backgroundImage: `linear-gradient(180.00deg, rgba(0, 0, 0, 0) 63.48%,rgba(0, 0, 0, 0.9) 92.161%), url(${poster ? poster : cardMockup})`,
	};

	return (
		<section
			className={styles.section}
			style={cardBackground}
			onClick={() => console.log('MODAL')}
		>
			<div className={styles.infoWrapper}>
				<h3 className={styles.movieTitle}>{movie![index].title}</h3>
				<div className={styles.detailsWrapper}>
					<p className={styles.details}>
						{genresText.join(', ')}&nbsp;|{' '}
						{movie![index].release_date.slice(0, 4)}
					</p>
					<div className={styles.starsWrapper}>
						<img src={starsMockup} className={styles.stars} alt="Stars" />
					</div>
				</div>
			</div>
		</section>
	);
};
