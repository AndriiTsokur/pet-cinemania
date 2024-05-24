import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDetails } from '@/utils';
import { DetailsDataT } from '@/utils';

export const fetchDetailsThunk = createAsyncThunk<
	DetailsDataT,
	number,
	{ rejectValue: string }
>('details/fetchDetailsThunk', async (movieId, thunkApi) => {
	try {
		const { data } = await getDetails(movieId);
		const {
			backdrop_path,
			genres,
			id,
			overview,
			popularity,
			poster_path,
			release_date,
			title,
			vote_average,
			vote_count,
		} = data;
		const selectedResults = {
			backdrop_path,
			genres,
			id,
			overview,
			popularity,
			poster_path,
			release_date,
			title,
			vote_average,
			vote_count,
		};
		return selectedResults;
	} catch (error: any) {
		return thunkApi.rejectWithValue(
			`Failed to retrieve details for Movie ID ${movieId}: ${error.message}`,
		);
	}
});
