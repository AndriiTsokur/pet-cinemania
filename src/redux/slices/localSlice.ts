import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
	},
});

export const selectLocal = (state: any) => state.local;
export const { toggleColorMode } = localSlice.actions;
export const localReducer = localSlice.reducer;
