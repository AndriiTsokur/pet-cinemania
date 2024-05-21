import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './WeeklyTrends.module.css';
import { selectService, selectTrendingAll } from '@/redux';
import { ArticleTitle, MovieCard } from '@/components';

export const WeeklyTrends: React.FC = () => {
	const {
		screen: { deviceType },
	} = useSelector(selectService);
	const { weekUpdated: movies } = useSelector(selectTrendingAll);

	const [randomCardNumbers, setRandomCardNumbers] = useState<number[]>([]);

	useEffect(() => {
		if (movies === null) return;

		const cardsQuantity = deviceType === 'mobile' ? 1 : 3;

		const newRandomCardNumbers: number[] = [];

		while (newRandomCardNumbers.length < cardsQuantity) {
			const rnd = Math.round(Math.random() * (movies.length - 1));
			if (!newRandomCardNumbers.includes(rnd)) {
				newRandomCardNumbers.push(rnd);
			}
		}
		setRandomCardNumbers(newRandomCardNumbers);
	}, [deviceType, movies]);

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
