// import axios from 'axios';

import styles from './Hero.module.css';
import heroPlug from '@/assets/images/hero-plug.jpg';
import { Button } from '@/components/Button';

const $TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
console.log($TMDB_TOKEN);

export const Hero: React.FC = () => {
	const heroBackground = {
		backgroundImage: `linear-gradient(68.84deg, rgb(17, 17, 17) 36.846%, rgba(17, 17, 17, 0) 60.047%), url(${heroPlug})`,
	};

	const handleTrailerBtn = () => {
		console.log('TRAILER');
	};

	const handleDetailsBtn = () => {
		console.log('DETAILS');
	};

	return (
		<article className={styles.hero} style={heroBackground}>
			<div className={styles.textWrapper}>
				<h1 className={styles.title}>Let’s Make Your Own Cinema</h1>
				<p className={styles.text}>
					Is a guide to creating a personalized movie theater experience. You'll
					need a projector, screen, and speakers. Decorate your space, choose
					your films, and stock up on snacks for the full experience
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
		</article>
	);
};
