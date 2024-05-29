import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTrailers } from '@/utils';
import { TrailerDataT } from '@/utils';

export const fetchTrailersThunk = createAsyncThunk<
	TrailerDataT[],
	number,
	{ rejectValue: string }
>('details/fetchTrailersThunk', async (movieId, thunkApi) => {
	try {
		const {
			data: { results },
		} = await getTrailers(movieId);
		return results;
	} catch (error: any) {
		return thunkApi.rejectWithValue(
			`Failed to retrieve trailers for Movie ID ${movieId}: ${error.message}`,
		);
	}
});
