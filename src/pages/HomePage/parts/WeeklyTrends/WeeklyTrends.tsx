import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './WeeklyTrends.module.css';
import { ArticleTitle, MovieCard } from '@/components';

export const WeeklyTrends: React.FC = () => {
	// TODO! Вынести isMobile и isModalvisible в глобальный стейт
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<article className={styles.weeklyTrends}>
			<div className={styles.titleWrapper}>
				<ArticleTitle title="Weekly Trends" />
				<p>
					<NavLink to="/catalogue" className={styles.link}>
						See all
					</NavLink>
				</p>
			</div>

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
