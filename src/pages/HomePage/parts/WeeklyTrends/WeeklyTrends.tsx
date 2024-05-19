import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './WeeklyTrends.module.css';
import { selectService } from '@/redux';
import { ArticleTitle, MovieCard } from '@/components';

export const WeeklyTrends: React.FC = () => {
	const {
		screen: { deviceType },
	} = useSelector(selectService);

	const isMobile = deviceType === 'mobile';

	return (
		<article className={styles.weeklyTrends}>
			<ArticleTitle title="Weekly Trends">
				<p>
					<NavLink to="/catalogue" className={styles.link}>
						See all
					</NavLink>
				</p>
			</ArticleTitle>

			<ul className={styles.cardsList}>
				{isMobile ? (
					<li className={styles.cardItem}>
						<MovieCard />
					</li>
				) : (
					<>
						<li className={styles.cardItem}>
							<MovieCard />
						</li>
						<li className={styles.cardItem}>
							<MovieCard />
						</li>
						<li className={styles.cardItem}>
							<MovieCard />
						</li>
					</>
				)}
			</ul>
		</article>
	);
};
