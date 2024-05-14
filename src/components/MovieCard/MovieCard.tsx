import { useEffect, useState } from 'react';
import styles from './MovieCard.module.css';
import cardMockup from '@/assets/images/card-mockup.jpg';
import starsMockup from '@/assets/images/stars-mockup.svg';

export const MovieCard: React.FC = () => {
	const [cardHeight, setCardHeight] = useState('');

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setCardHeight(`${(window.innerWidth / 320) * 406}px`);
			} else if (window.innerWidth < 1280) {
				setCardHeight(`${(window.innerWidth / 768) * 325}px`);
			} else {
				setCardHeight('574px');
			}
		};

		window.addEventListener('resize', handleResize);
		if (cardHeight === '') handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const cardBackground = {
		height: cardHeight,
		backgroundImage: `linear-gradient(180.00deg, rgba(0, 0, 0, 0) 63.48%,rgba(0, 0, 0, 0.9) 92.161%), url(${cardMockup})`,
	};

	return (
		<section
			className={styles.section}
			style={cardBackground}
			onClick={() => console.log('MODAL')}
		>
			<div className={styles.infoWrapper}>
				<h3 className={styles.movieTitle}>Ghosted</h3>
				<div className={styles.detailsWrapper}>
					<p className={styles.details}>Action, Thriller, Crime | 2023</p>
					<div className={styles.starsWrapper}>
						<img src={starsMockup} className={styles.stars} alt="Stars" />
					</div>
				</div>
			</div>
		</section>
	);
};
