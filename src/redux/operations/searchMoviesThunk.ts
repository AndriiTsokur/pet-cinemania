import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchMovies } from '@/utils';

type RequestParamsT = {
	query: string;
	year?: string;
	page?: number;
};

export const searchMoviesThunk = createAsyncThunk(
	'searchResults/searchMoviesThunk',
	async (requestParams: RequestParamsT, thunkApi) => {
		try {
			const { data } = await searchMovies(requestParams);
			return data;
		} catch (error: any) {
			return thunkApi.rejectWithValue(
				`Failed to retrieve search results: ${error.message}`,
			);
		}
	},
);
