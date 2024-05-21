import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Upcoming.module.css';
import { selectService, selectUpcoming } from '@/redux';
import { ArticleTitle, Button } from '@/components';
// import posterPlug from '@/assets/images/poster-plug.jpg';

type MovieStateT = {
	idx: number;
	image: string;
	genresText: string[];
};

export const Upcoming: React.FC = () => {
	const {
		screen: { deviceType, movieCardHeight },
		apiConfig: { data: apiConfig } = {},
		genres: { data: genresArr } = {},
	} = useSelector(selectService);
	const { data: upcoming } = useSelector(selectUpcoming);

	const [movie, setMovie] = useState<MovieStateT>({
		idx: 0,
		image: '',
		genresText: [],
	});

	useEffect(() => {
		if (upcoming === null || apiConfig === null || genresArr === null) return;

		const index = Math.round(Math.random() * (upcoming.length - 1));

		const image =
			deviceType === 'mobile'
				? `${apiConfig?.secure_base_url}${apiConfig?.poster_sizes[3]}${upcoming![index].poster_path}`
				: `${apiConfig?.secure_base_url}${apiConfig?.backdrop_sizes[2]}${upcoming![index].backdrop_path}`;

		const genresText: string[] = [];

		upcoming[index].genre_ids.map((id) => {
			const genre = genresArr?.find((item) => item.id === id);
			if (genre) genresText.push(genre.name);
		});

		setMovie({ idx: index, image, genresText });
	}, [deviceType, upcoming]);

	const handleTrailerBtn = () => {
		console.log('TRAILER');
	};

	const handleDetailsBtn = () => {
		console.log('DETAILS');
	};

	if (upcoming === null) return null;

	return (
		<article className={styles.upcoming}>
			<ArticleTitle title="Upcoming This Month" />
			<div className={styles.container}>
				<div
					style={deviceType === 'mobile' ? { height: movieCardHeight } : {}}
					className={styles.posterContainer}
				>
					<img
						src={movie.image}
						className={
							deviceType === 'mobile' ? styles.poster : styles.backdrop
						}
						alt={upcoming![movie.idx].title}
					/>
				</div>

				<div className={styles.infoContainer}>
					<h3 className={styles.title}>{upcoming![movie.idx].title}</h3>
					<div className={styles.detailsWrapper}>
						<div className={styles.column}>
							<div className={styles.parameterName}>
								<p>Release date</p>
								<p>Vote / Votes</p>
							</div>
							<div className={styles.data}>
								<p className={styles.releaseDate}>
									{upcoming![movie.idx].release_date}
								</p>
								<p>
									<span className={styles.votes}>
										{upcoming![movie.idx].vote_average}
									</span>{' '}
									/{' '}
									<span className={styles.votes}>
										{upcoming![movie.idx].vote_count}
									</span>
								</p>
							</div>
						</div>

						<div className={styles.column}>
							<div className={styles.parameterName}>
								<p>Popularity</p>
								<p>Genre</p>
							</div>
							<div className={styles.data}>
								<p>{upcoming![movie.idx].popularity}</p>
								<p>{movie.genresText.join(', ')}</p>
							</div>
						</div>
					</div>

					<h4 className={styles.aboutTitle}>About</h4>
					<p className={styles.aboutText}>{upcoming![movie.idx].overview}</p>

					<div className={styles.btnWrapper}>
						<Button isGradient={true} onClick={handleTrailerBtn}>
							Watch trailer
						</Button>
						<Button isGradient={false} onClick={handleDetailsBtn}>
							Add to my Library
						</Button>
					</div>
				</div>
			</div>
		</article>
	);
};
