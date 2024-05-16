import { createSlice } from '@reduxjs/toolkit';
import { fetchApiConfigThunk } from '@/redux/operations';

const initialState = {
	apiConfig: {
		data: null,
		isLoading: false,
		error: null,
	},
	genres: {
		data: null,
		isLoading: false,
		error: null,
	},
};

const fetchServiceSlice = createSlice({
	name: 'service',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			// Fetching API Configuration Details
			.addCase(fetchApiConfigThunk.pending, (state) => {
				state.apiConfig.data = null;
				state.apiConfig.isLoading = true;
				state.apiConfig.error = null;
			})
			.addCase(
				fetchApiConfigThunk.fulfilled,
				(state, action: { payload: any }) => {
					state.apiConfig.data = action.payload;
					state.apiConfig.isLoading = false;
				},
			)
			.addCase(
				fetchApiConfigThunk.rejected,
				(state, action: { payload: any }) => {
					state.apiConfig.isLoading = false;
					state.apiConfig.error = action.payload;
				},
			);
	},
});

export const selectService = (state: any) => state.service;
export const serviceReducer = fetchServiceSlice.reducer;
