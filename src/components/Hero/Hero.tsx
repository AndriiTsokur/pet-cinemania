import { useSelector } from 'react-redux';

import styles from './Hero.module.css';
import { HeroPlug } from './parts';
import { Button } from '@/components/Button';
import { selectService, selectTrendingDay } from '@/redux';
import { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
	const [movie, setMovie] = useState({ idx: 0, image: '' });

	const {
		screen: { deviceType },
		apiConfig: { data: apiConfig } = {},
	} = useSelector(selectService);
	const trendingDay = useSelector(selectTrendingDay);

	useEffect(() => {
		if (trendingDay === null) return;

		const rndIndex = Math.round(Math.random() * (trendingDay.length - 1));

		const backdrop =
			deviceType === 'desktop'
				? `${apiConfig?.secure_base_url}${apiConfig?.backdrop_sizes[2]}${trendingDay![rndIndex].backdrop_path}`
				: `${apiConfig?.secure_base_url}${apiConfig?.backdrop_sizes[1]}${trendingDay![rndIndex].backdrop_path}`;

		setMovie((prev) => ({ ...prev, idx: rndIndex, image: backdrop }));
	}, [deviceType, trendingDay]);

	const heroBackground = {
		backgroundImage: `linear-gradient(68.84deg, rgb(17, 17, 17) 36.846%, rgba(17, 17, 17, 0) 60.047%), url(${movie.image})`,
	};

	const handleTrailerBtn = () => {
		console.log('TRAILER');
	};

	const handleDetailsBtn = () => {
		console.log('DETAILS');
	};

	return (
		<>
			{trendingDay ? (
				<article className={styles.hero} style={heroBackground}>
					<div className={styles.container}>
						<div className={styles.textWrapper}>
							<h1 className={styles.title}>{trendingDay[movie.idx].title}</h1>
							<p className={styles.text}>{trendingDay[movie.idx].overview}</p>
						</div>

						<div className={styles.btnWrapper}>
							<Button isGradient={true} onClick={handleTrailerBtn}>
								Watch trailer
							</Button>
							<Button
								isGradient={false}
								isOutOfColorMode={true}
								onClick={handleDetailsBtn}
							>
								More details
							</Button>
						</div>
					</div>
				</article>
			) : (
				<HeroPlug />
			)}
		</>
	);
};
