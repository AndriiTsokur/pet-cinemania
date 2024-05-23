import { createSlice } from '@reduxjs/toolkit';
import { fetchApiConfigThunk, fetchGenresThunk } from '@/redux/operations';
import { ServiceStateT } from '@/utils';

const initialState: ServiceStateT = {
	apiConfig: {
		data: null,
		status: {
			isLoading: false,
			error: null,
		},
	},
	genres: {
		data: null,
		status: {
			isLoading: false,
			error: null,
		},
	},
	screen: {
		deviceType: null,
		screenWidth: null,
		movieCardHeight: '',
		modalIsOpen: false,
	},
};

const fetchServiceSlice = createSlice({
	name: 'service',
	initialState,
	reducers: {
		defineScreenParams(state, action) {
			state.screen = { ...state.screen, ...action.payload };
		},
		toggleModal(state) {
			state.screen.modalIsOpen = !state.screen.modalIsOpen;
		},
	},
	extraReducers(builder) {
		builder
			// Fetching API Configuration Details
			.addCase(fetchApiConfigThunk.pending, (state) => {
				state.apiConfig.data = null;
				state.apiConfig.status.isLoading = true;
				state.apiConfig.status.error = null;
			})
			.addCase(
				fetchApiConfigThunk.fulfilled,
				(state, action: { payload: any }) => {
					state.apiConfig.data = action.payload;
					state.apiConfig.status.isLoading = false;
				},
			)
			.addCase(
				fetchApiConfigThunk.rejected,
				(state, action: { payload: any }) => {
					state.apiConfig.status.isLoading = false;
					state.apiConfig.status.error = action.payload;
				},
			)

			// Fetching Genres
			.addCase(fetchGenresThunk.pending, (state) => {
				state.genres.data = null;
				state.genres.status.isLoading = true;
				state.genres.status.error = null;
			})
			.addCase(
				fetchGenresThunk.fulfilled,
				(state, action: { payload: any }) => {
					state.genres.data = action.payload;
					state.genres.status.isLoading = false;
				},
			)
			.addCase(fetchGenresThunk.rejected, (state, action: { payload: any }) => {
				state.genres.status.isLoading = false;
				state.genres.status.error = action.payload;
			});
	},
});

export const selectService = (state: { service: ServiceStateT }) =>
	state.service;
export const { defineScreenParams, toggleModal } = fetchServiceSlice.actions;
export const serviceReducer = fetchServiceSlice.reducer;
