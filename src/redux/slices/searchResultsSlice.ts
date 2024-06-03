import { createSlice } from '@reduxjs/toolkit';
import { searchMoviesThunk } from '@/redux/operations';
import { SearchResultsStateT } from '@/utils';

const initialState: SearchResultsStateT = {
	data: null,
	dataUpdated: null,
	page: 1,
	total_pages: 0,
	total_results: 0,
	status: {
		isLoading: false,
		error: null,
	},
};

const searchResultsSlice = createSlice({
	name: 'searchResults',
	initialState,
	reducers: {
		substituteSearchResults(state, action) {
			state.dataUpdated = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			// Fetching Upcoming data
			.addCase(searchMoviesThunk.pending, (state) => {
				state.data = null;
				state.page = 1;
				state.total_pages = 0;
				state.total_results = 0;
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

export const selectSearchResults = (state: {
	searchResults: SearchResultsStateT;
}) => state.searchResults;
export const { substituteSearchResults } = searchResultsSlice.actions;
export const searchResultsReducer = searchResultsSlice.reducer;
