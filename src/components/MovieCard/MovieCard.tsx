import { useSelector } from 'react-redux';

import styles from './MovieCard.module.css';
import { selectService, selectTrendingWeek } from '@/redux';
import cardMockup from '@/assets/images/card-mockup.jpg';
import starsMockup from '@/assets/images/stars-mockup.svg';

type PropsT = {
	number: number;
};

export const MovieCard: React.FC<PropsT> = ({ number }) => {
	const {
		screen: { deviceType, movieCardHeight },
		apiConfig: { data } = {},
		genres: { data: genresArr } = {},
	} = useSelector(selectService);
	const movie = useSelector(selectTrendingWeek);
	const genresText: string[] = [];

	const poster =
		deviceType === 'desktop'
			? `${data?.secure_base_url}${data?.poster_sizes[4]}${movie![number].poster_path}`
			: `${data?.secure_base_url}${data?.poster_sizes[3]}${movie![number].poster_path}`;

	movie![number].genre_ids.map((id) => {
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
				<h3 className={styles.movieTitle}>{movie![number].title}</h3>
				<div className={styles.detailsWrapper}>
					<p className={styles.details}>
						{genresText.join(', ')}&nbsp;|{' '}
						{movie![number].release_date.slice(0, 4)}
					</p>
					<div className={styles.starsWrapper}>
						<img src={starsMockup} className={styles.stars} alt="Stars" />
					</div>
				</div>
			</div>
		</section>
	);
};
