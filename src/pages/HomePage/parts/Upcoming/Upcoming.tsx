import styles from './Upcoming.module.css';
import posterMockup from '@/assets/images/upcoming-mockup.jpg';
import { ArticleTitle } from '@/components';

export const Upcoming: React.FC = () => {
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
						<div className={styles.parameterName}>
							<p>Release date</p>
							<p>Vote / Votes</p>
							<p>Popularity</p>
							<p>Genre</p>
						</div>

						<div className={styles.data}>
							<p className={styles.releaseDate}>03.03.2023</p>
							<p>
								<span className={styles.votes}>7.3</span> /{' '}
								<span className={styles.votes}>1260</span>
							</p>
							<p>99.9</p>
							<p>Comedy, Action</p>
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
				</div>
			</div>
		</article>
	);
};
