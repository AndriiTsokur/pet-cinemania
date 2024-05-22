import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Hero.module.css';
import { selectTrendingAll } from '@/redux';
import { HeroPlug } from './parts';
import { Button } from '@/components/Button';
import starsMockup from '@/assets/images/stars-mockup.svg';

export const Hero: React.FC = () => {
	const { dayUpdated: movies } = useSelector(selectTrendingAll);
	const [idx, setIdx] = useState(0);

	useEffect(() => {
		if (movies === null) return;
		const index = Math.round(Math.random() * (movies.length - 1));
		setIdx(index);
	}, [movies]);

	let heroBg = {};
	if (movies !== null) {
		heroBg = {
			backgroundImage: `linear-gradient(68.84deg, rgb(17, 17, 17) 36.846%, rgba(17, 17, 17, 0) 60.047%), url(${movies[idx].backdrop_url})`,
		};
	}

	const handleTrailerBtn = () => {
		console.log('TRAILER');
	};

	const handleDetailsBtn = () => {
		console.log('DETAILS');
	};

	return (
		<>
			{movies ? (
				<article className={styles.hero} style={heroBg}>
					<div className={styles.container}>
						<div className={styles.textWrapper}>
							<h1 className={styles.titleStars}>{movies[idx].title}</h1>
							<div className={styles.starsWrapper}>
								<img src={starsMockup} className={styles.stars} alt="Stars" />
							</div>
							<p className={styles.text}>
								{movies[idx].overview_brief
									? movies[idx].overview_brief
									: movies[idx].overview}
							</p>
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
