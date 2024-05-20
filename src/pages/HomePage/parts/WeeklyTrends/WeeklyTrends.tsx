import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './WeeklyTrends.module.css';
import { selectService, selectTrendingWeek } from '@/redux';
import { ArticleTitle, MovieCard } from '@/components';

export const WeeklyTrends: React.FC = () => {
	const [randomCardNumbers, setRandomCardNumbers] = useState<number[]>([]);

	const {
		screen: { deviceType },
	} = useSelector(selectService);
	const trendingWeek = useSelector(selectTrendingWeek);

	useEffect(() => {
		if (trendingWeek === null) return;

		const isMobile = deviceType === 'mobile';
		const cardsQuantity = isMobile ? 1 : 3;

		const newRandomCardNumbers: number[] = [];

		while (newRandomCardNumbers.length < cardsQuantity) {
			const rnd = Math.round(Math.random() * (trendingWeek.length - 1));
			if (!newRandomCardNumbers.includes(rnd)) {
				newRandomCardNumbers.push(rnd);
			}
		}
		setRandomCardNumbers(newRandomCardNumbers);
	}, [deviceType, trendingWeek]);

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
						<MovieCard index={number} />
					</li>
				))}
			</ul>
		</article>
	);
};
