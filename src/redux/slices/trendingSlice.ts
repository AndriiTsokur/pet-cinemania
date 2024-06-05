import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTrendingThunk } from '@/redux/operations';
import { MoviesDataT, TrendingStateT } from '@/utils';

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
			state.weekUpdated = {
				...state.week,
				results: action.payload,
				page: state.week ? state.week.page : 1,
				total_pages: state.week ? state.week.total_pages : 1,
				total_results: state.week ? state.week.total_results : 1,
			};
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
						data: MoviesDataT;
						period: 'day' | 'week';
					}>,
				) => {
					const { data, period } = action.payload;
					state[period] = data;
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
