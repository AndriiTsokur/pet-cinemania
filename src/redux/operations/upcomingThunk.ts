import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUpcoming } from '@/utils';
import { UpcomingDataT } from '@/utils';

export const fetchUpcomingThunk = createAsyncThunk<
	UpcomingDataT[],
	void,
	{ rejectValue: string }
>('upcoming/fetchUpcomingThunk', async (_, thunkApi) => {
	try {
		const {
			data: { results },
		} = await getUpcoming();
		const selectedResults = processData(results);
		return selectedResults;
	} catch (error: any) {
		return thunkApi.rejectWithValue(
			`Failed to retrieve Upcoming data: ${error.message}`,
		);
	}
});

function processData(results: any[]): UpcomingDataT[] {
	return results.map(
		({
			backdrop_path,
			id,
			overview,
			poster_path,
			title,
			genre_ids,
			popularity,
			release_date,
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
			release_date,
			vote_average,
			vote_count,
		}),
	);
}
