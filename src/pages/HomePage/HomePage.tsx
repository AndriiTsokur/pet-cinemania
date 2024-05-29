import { Hero } from '@/components';
import { Upcoming, WeeklyTrends } from './parts';

export const HomePage: React.FC = () => {
	return (
		<>
			<Hero />
			<WeeklyTrends />
			<Upcoming />
		</>
	);
};
