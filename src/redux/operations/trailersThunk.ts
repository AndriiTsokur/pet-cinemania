import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTrailers } from '@/utils';
import { DetailsDataT } from '@/utils';

export const fetchTrailersThunk = createAsyncThunk<
	DetailsDataT,
	number,
	{ rejectValue: string }
>('details/fetchTrailersThunk', async (movieId, thunkApi) => {
	try {
		const { data } = await getTrailers(movieId);
		return data;
	} catch (error: any) {
		return thunkApi.rejectWithValue(
			`Failed to retrieve trailers for Movie ID ${movieId}: ${error.message}`,
		);
	}
});
