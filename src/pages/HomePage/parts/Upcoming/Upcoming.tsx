import styles from './Upcoming.module.css';
import posterMockup from '@/assets/images/upcoming-mockup.jpg';
import { ArticleTitle, Button } from '@/components';

export const Upcoming: React.FC = () => {
	const handleTrailerBtn = () => {
		console.log('TRAILER');
	};

	const handleDetailsBtn = () => {
		console.log('DETAILS');
	};

	return (
		<article className={styles.upcoming}>
			<ArticleTitle title="Upcoming This Month" />
			<div className={styles.container}>
				<div className={styles.posterContainer}>
					<img
						src={posterMockup}
						className={styles.poster}
						alt="Upcoming movie poster"
					/>
				</div>

				<div className={styles.infoContainer}>
					<h3 className={styles.title}>The Lost City</h3>
					<div className={styles.detailsWrapper}>
						<div className={styles.column}>
							<div className={styles.parameterName}>
								<p>Release date</p>
								<p>Vote / Votes</p>
							</div>
							<div className={styles.data}>
								<p className={styles.releaseDate}>03.03.2023</p>
								<p>
									<span className={styles.votes}>7.3</span> /{' '}
									<span className={styles.votes}>1260</span>
								</p>
							</div>
						</div>

						<div className={styles.column}>
							<div className={styles.parameterName}>
								<p>Popularity</p>
								<p>Genre</p>
							</div>
							<div className={styles.data}>
								<p>99.9</p>
								<p>Comedy, Action</p>
							</div>
						</div>
					</div>

					<h4 className={styles.aboutTitle}>About</h4>
					<p className={styles.aboutText}>
						Reclusive author Loretta Sage writes about exotic places
						in her popular adventure novels that feature a handsome cover model
						named Alan. While on tour promoting her new book with Alan, Loretta
						gets kidnapped by an eccentric billionaire who hopes she can lead
						him to an ancient city's lost treasure from her latest story.
						Determined to prove he can be a hero in real life and not just on
						the pages of her books, Alan sets off to rescue her.
					</p>

					<div className={styles.btnWrapper}>
						<Button isGradient={true} onClick={handleTrailerBtn}>
							Watch trailer
						</Button>
						<Button isGradient={false} onClick={handleDetailsBtn}>
							More details
						</Button>
					</div>
				</div>
			</div>
		</article>
	);
};
