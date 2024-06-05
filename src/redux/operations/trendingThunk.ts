import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTrending } from '@/utils';
import { MoviesDataT } from '@/utils';

export const fetchTrendingThunk = createAsyncThunk<
	{ data: MoviesDataT; period: 'day' | 'week' },
	{ period: 'day' | 'week'; page?: number },
	{ rejectValue: string }
>('trending/fetchTrendingThunk', async ({ period, page }, thunkApi) => {
	try {
		const { data } = await getTrending({ period, page });
		return { data, period };
	} catch (error: any) {
		return thunkApi.rejectWithValue(
			`Failed to retrieve Trending ${period.slice(0, 1).toUpperCase() + period.slice(1)} data: ${error.message}`,
		);
	}
});
