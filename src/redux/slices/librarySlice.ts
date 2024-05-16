import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isDarkMode: true,
	libraryState: [],
};

const librarySlice = createSlice({
	name: 'library',
	initialState,
	reducers: {
		toggleColorMode(state) {
			state.isDarkMode = !state.isDarkMode;
		},
	},
});

export const selectLibrary = (state: any) => state.library;
export const { toggleColorMode } = librarySlice.actions;
export const libraryReducer = librarySlice.reducer;
