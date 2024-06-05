import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUpcomingThunk } from '@/redux/operations';
import { MoviesDataT, UpcomingStateT } from '@/utils';

const initialState: UpcomingStateT = {
	data: null,
	dataUpdated: null,
	status: {
		isLoading: false,
		error: null,
	},
};

const fetchUpcomingSlice = createSlice({
	name: 'upcoming',
	initialState,
	reducers: {
		substituteUpcoming(state, action) {
			state.dataUpdated = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			// Fetching Upcoming data
			.addCase(fetchUpcomingThunk.pending, (state) => {
				state.data = null;
				state.status.isLoading = true;
				state.status.error = null;
			})
			.addCase(
				fetchUpcomingThunk.fulfilled,
				(state, action: PayloadAction<MoviesDataT>) => {
					state.data = action.payload;
					state.status.isLoading = false;
				},
			)
			.addCase(
				fetchUpcomingThunk.rejected,
				(state, action: { payload: any }) => {
					state.status.isLoading = false;
					state.status.error = action.payload;
				},
			);
	},
});

export const selectUpcoming = (state: { upcoming: UpcomingStateT }) =>
	state.upcoming;
export const { substituteUpcoming } = fetchUpcomingSlice.actions;
export const upcomingReducer = fetchUpcomingSlice.reducer;
