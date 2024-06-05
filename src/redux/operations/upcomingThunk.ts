import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUpcoming } from '@/utils';
import { MoviesDataT } from '@/utils';

export const fetchUpcomingThunk = createAsyncThunk<
	MoviesDataT,
	void,
	{ rejectValue: string }
>('upcoming/fetchUpcomingThunk', async (_, thunkApi) => {
	try {
		const { data } = await getUpcoming();
		return data;
	} catch (error: any) {
		return thunkApi.rejectWithValue(
			`Failed to retrieve Upcoming data: ${error.message}`,
		);
	}
});
