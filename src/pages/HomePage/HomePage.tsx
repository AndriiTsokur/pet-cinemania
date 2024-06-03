import { Hero, WeeklyTrends } from '@/components';
import { Upcoming } from './parts';

export const HomePage: React.FC = () => {
	return (
		<>
			<Hero />
			<WeeklyTrends />
			<Upcoming />
		</>
	);
};
