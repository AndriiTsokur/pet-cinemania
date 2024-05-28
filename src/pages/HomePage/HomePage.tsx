import { useDispatch, useSelector } from 'react-redux';

import { Hero } from '@/components';
import { Upcoming, WeeklyTrends } from './parts';
import { useSubstitute } from '@/utils';
import {
	selectService,
	selectTrendingAll,
	selectUpcoming,
	substituteTrendingDay,
	substituteTrendingWeek,
	substituteUpcoming,
} from '@/redux';

export const HomePage: React.FC = () => {
	const dispatch = useDispatch();

	const {
		screen: { deviceType },
	} = useSelector(selectService);
	const { day, week } = useSelector(selectTrendingAll);
	const { data: upcoming } = useSelector(selectUpcoming);

	useSubstitute({
		selector: day,
		action: substituteTrendingDay,
		dependencies: [dispatch, deviceType, day],
	});

	useSubstitute({
		selector: week,
		action: substituteTrendingWeek,
		dependencies: [dispatch, deviceType, week],
	});

	useSubstitute({
		selector: upcoming,
		action: substituteUpcoming,
		dependencies: [dispatch, deviceType, upcoming],
	});

	return (
		<>
			<Hero />
			<WeeklyTrends />
			<Upcoming />
		</>
	);
};
