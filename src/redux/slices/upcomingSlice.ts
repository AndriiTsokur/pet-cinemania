import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUpcomingThunk } from '@/redux/operations';
import { UpcomingDataT, UpcomingStateT } from '@/utils';

const initialState: UpcomingStateT = {
	data: null,
	status: {
		isLoading: false,
		error: null,
	},
};

const fetchUpcomingSlice = createSlice({
	name: 'upcoming',
	initialState,
	reducers: {},
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
				(state, action: PayloadAction<UpcomingDataT[]>) => {
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
export const upcomingReducer = fetchUpcomingSlice.reducer;
