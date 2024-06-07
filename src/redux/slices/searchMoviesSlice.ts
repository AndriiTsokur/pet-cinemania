import { createSlice } from '@reduxjs/toolkit';
import { searchMoviesThunk } from '@/redux/operations';
import { SearchResultsStateT } from '@/utils';

const initialState: SearchResultsStateT = {
	query: '',
	data: null,
	dataUpdated: null,
	status: {
		isLoading: false,
		error: null,
	},
};

const searchMoviesSlice = createSlice({
	name: 'searchMovies',
	initialState,
	reducers: {
		setQuery(state, action) {
			state.query = action.payload;
		},
		substituteSearchMovies(state, action) {
			state.dataUpdated = {
				...state.data,
				results: action.payload,
				page: state.data ? state.data.page : 1,
				total_pages: state.data ? state.data.total_pages : 1,
				total_results: state.data ? state.data.total_results : 1,
			};
		},
	},
	extraReducers(builder) {
		builder
			// Fetching Upcoming data
			.addCase(searchMoviesThunk.pending, (state) => {
				state.data = null;
				state.status.isLoading = true;
				state.status.error = null;
			})
			.addCase(searchMoviesThunk.fulfilled, (state, action: any) => {
				state.data = action.payload;
				state.status.isLoading = false;
			})
			.addCase(
				searchMoviesThunk.rejected,
				(state, action: { payload: any }) => {
					state.status.isLoading = false;
					state.status.error = action.payload;
				},
			);
	},
});

export const selectSearchMovies = (state: {
	searchMovies: SearchResultsStateT;
}) => state.searchMovies;
export const { setQuery, substituteSearchMovies } = searchMoviesSlice.actions;
export const searchMoviesReducer = searchMoviesSlice.reducer;
