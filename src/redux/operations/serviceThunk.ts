import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApiConfig, getGenres } from '@/utils';

export const fetchApiConfigThunk = createAsyncThunk(
	'apiConfig/fetchApiConfigThunk',
	async (_, thunkApi) => {
		try {
			const {
				data: {
					images: { base_url, secure_base_url, backdrop_sizes, poster_sizes },
				},
			} = await getApiConfig();
			return { base_url, secure_base_url, backdrop_sizes, poster_sizes };
		} catch (error: any) {
			return thunkApi.rejectWithValue(
				`Failed to retrieve API Configuration data: ${error.message}`,
			);
		}
	},
);

export const fetchGenresThunk = createAsyncThunk(
	'genres/fetchGenresThunk',
	async (_, thunkApi) => {
		try {
			const res = await getGenres();
			return res.data.genres;
		} catch (error: any) {
			return thunkApi.rejectWithValue(
				`Failed to retrieve Genres data: ${error.message}`,
			);
		}
	},
);
