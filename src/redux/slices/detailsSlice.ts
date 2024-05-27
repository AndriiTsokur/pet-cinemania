import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDetailsThunk } from '@/redux/operations';
import { DetailsDataT, DetailsStateT } from '@/utils';

const initialState: DetailsStateT = {
	data: {},
	status: {
		isLoading: false,
		error: null,
	},
};

const fetchDetailsSlice = createSlice({
	name: 'details',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			// Fetching Details data
			.addCase(fetchDetailsThunk.pending, (state) => {
				state.data = {};
				state.status.isLoading = true;
				state.status.error = null;
			})
			.addCase(
				fetchDetailsThunk.fulfilled,
				(state, action: PayloadAction<DetailsDataT>) => {
					state.data = action.payload;
					state.status.isLoading = false;
				},
			)
			.addCase(
				fetchDetailsThunk.rejected,
				(state, action: { payload: any }) => {
					state.status.isLoading = false;
					state.status.error = action.payload;
				},
			);
	},
});

export const selectDetails = (state: { details: DetailsStateT }) =>
	state.details;
export const detailsReducer = fetchDetailsSlice.reducer;