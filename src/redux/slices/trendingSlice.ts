import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTrendingThunk } from '@/redux/operations';
import { TrendingDataT, TrendingStateT } from '@/utils';

const initialState: TrendingStateT = {
	day: null,
	dayUpdated: null,
	week: null,
	weekUpdated: null,
	status: {
		isLoading: false,
		error: null,
	},
};

const fetchTrendingSlice = createSlice({
	name: 'trending',
	initialState,
	reducers: {
		substituteTrendingDay(state, action) {
			state.dayUpdated = action.payload;
		},
		substituteTrendingWeek(state, action) {
			state.weekUpdated = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			// Fetching Trending Day & Week data
			.addCase(fetchTrendingThunk.pending, (state) => {
				state.day = null;
				state.week = null;
				state.status.isLoading = true;
				state.status.error = null;
			})
			.addCase(
				fetchTrendingThunk.fulfilled,
				(
					state,
					action: PayloadAction<{
						selectedResults: TrendingDataT[];
						period: 'day' | 'week';
					}>,
				) => {
					const { selectedResults, period } = action.payload;
					state[period] = selectedResults;
					state.status.isLoading = false;
				},
			)
			.addCase(
				fetchTrendingThunk.rejected,
				(state, action: { payload: any }) => {
					state.status.isLoading = false;
					state.status.error = action.payload;
				},
			);
	},
});

export const selectTrendingDay = (state: { trending: TrendingStateT }) =>
	state.trending.day;
export const selectTrendingDayUpdated = (state: { trending: TrendingStateT }) =>
	state.trending.dayUpdated;
export const selectTrendingWeek = (state: { trending: TrendingStateT }) =>
	state.trending.week;
export const selectTrendingWeekUpdated = (state: {
	trending: TrendingStateT;
}) => state.trending.weekUpdated;
export const selectTrendingAll = (state: { trending: TrendingStateT }) =>
	state.trending;
export const { substituteTrendingDay, substituteTrendingWeek } =
	fetchTrendingSlice.actions;
export const trendingReducer = fetchTrendingSlice.reducer;
