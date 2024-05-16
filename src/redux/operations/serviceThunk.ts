import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApiConfig } from '@/utils';

export const fetchApiConfigThunk = createAsyncThunk(
	'apiConfig/fetchApiConfigThunk',
	async (_, thunkApi) => {
		try {
			const {
				data: {
					images: { base_url, secure_base_url, backdrop_sizes, poster_sizes },
				},
			} = await getApiConfig();
			console.log({ base_url, secure_base_url, backdrop_sizes, poster_sizes });
			return { base_url, secure_base_url, backdrop_sizes, poster_sizes };
		} catch (error: any) {
			return thunkApi.rejectWithValue(error.message);
		}
	},
);
