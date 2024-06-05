import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MoviesResultsT } from '@/utils';

type LocalStateT = {
	isDarkMode: boolean;
	movies: MoviesResultsT[];
};

const initialState: LocalStateT = {
	isDarkMode: true,
	movies: [],
};

const localSlice = createSlice({
	name: 'local',
	initialState,
	reducers: {
		toggleColorMode(state) {
			state.isDarkMode = !state.isDarkMode;
		},
		addToLibrary(state, action: PayloadAction<MoviesResultsT>) {
			const temp = [...state.movies];
			temp.unshift(action.payload);
			state.movies = [...temp];
		},
		deleteFromLibrary(state, action: PayloadAction<{ id: number }>) {
			const temp = state.movies.filter((item) => item.id !== action.payload.id);
			state.movies = [...temp];
		},
	},
});

export const selectLocal = (state: { local: LocalStateT }) => state.local;
export const { addToLibrary, deleteFromLibrary, toggleColorMode } =
	localSlice.actions;
export const localReducer = localSlice.reducer;
