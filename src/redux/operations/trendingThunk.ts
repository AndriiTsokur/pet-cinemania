import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTrending } from '@/utils';
import { TrendingDataT } from '@/utils';

export const fetchTrendingThunk = createAsyncThunk<
	{ selectedResults: TrendingDataT[]; period: 'day' | 'week' },
	'day' | 'week',
	{ rejectValue: string }
>('trending/fetchTrendingThunk', async (period, thunkApi) => {
	try {
		const {
			data: { results },
		} = await getTrending(period);
		const selectedResults = processData(results);
		return { selectedResults, period };
	} catch (error: any) {
		return thunkApi.rejectWithValue(
			`Failed to retrieve Trending ${period.slice(0, 1).toUpperCase() + period.slice(1)} data: ${error.message}`,
		);
	}
});

function processData(results: any[]): TrendingDataT[] {
	return results.map(
		({
			backdrop_path,
			id,
			overview,
			poster_path,
			title,
			genre_ids,
			popularity,
			vote_average,
			vote_count,
		}) => ({
			backdrop_path,
			id,
			overview,
			poster_path,
			title,
			genre_ids,
			popularity,
			vote_average,
			vote_count,
		}),
	);
}
