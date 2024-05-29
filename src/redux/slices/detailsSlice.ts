import { createSlice } from '@reduxjs/toolkit';
import { fetchTrailersThunk } from '@/redux/operations';
import { DetailsStateT } from '@/utils';

const initialState: DetailsStateT = {
	data: null,
	trailers: null,
	status: {
		isLoading: false,
		error: null,
	},
};

const detailsSlice = createSlice({
	name: 'details',
	initialState,
	reducers: {
		uploadDetails(state, action) {
			state.data = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			// Fetching Details data
			.addCase(fetchTrailersThunk.pending, (state) => {
				state.trailers = null;
				state.status.isLoading = true;
				state.status.error = null;
			})
			.addCase(fetchTrailersThunk.fulfilled, (state, action) => {
				state.trailers = action.payload.filter(
					(item: any) =>
						item.official &&
						item.site.toLowerCase() === 'youtube' &&
						item.type.toLowerCase() === 'trailer',
				);
				state.status.isLoading = false;
			})
			.addCase(
				fetchTrailersThunk.rejected,
				(state, action: { payload: any }) => {
					state.status.isLoading = false;
					state.status.error = action.payload;
				},
			);
	},
});

export const selectDetails = (state: { details: DetailsStateT }) =>
	state.details;
export const { uploadDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;
