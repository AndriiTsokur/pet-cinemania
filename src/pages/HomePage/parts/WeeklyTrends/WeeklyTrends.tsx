import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './WeeklyTrends.module.css';
import { selectService, selectTrendingWeek } from '@/redux';
import { ArticleTitle, MovieCard } from '@/components';

export const WeeklyTrends: React.FC = () => {
	const {
		screen: { deviceType },
	} = useSelector(selectService);
	const trendingWeek = useSelector(selectTrendingWeek);

	const isMobile = deviceType === 'mobile';

	const cardsNumber = isMobile ? 1 : 3;
	const randomCardNumbers: number[] = [];

	if (trendingWeek) {
		while (randomCardNumbers.length < cardsNumber) {
			const rnd = Math.round(Math.random() * (trendingWeek.length - 1));
			if (!randomCardNumbers.includes(rnd)) {
				randomCardNumbers.push(rnd);
			}
		}
	}

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
				{randomCardNumbers.map((number) => (
					<li key={number} className={styles.cardItem}>
						<MovieCard number={number} />
					</li>
				))}
				{/* {isMobile ? (
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
				)} */}
			</ul>
		</article>
	);
};
