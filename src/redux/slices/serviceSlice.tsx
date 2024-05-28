import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchApiConfigThunk, fetchGenresThunk } from '@/redux/operations';
import { ApiConfigDataT, ServiceStateT } from '@/utils';
import { defineImagesFetchURL } from '@/utils';

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
	modal: {
		mobileMenuIsOpen: false,
		modalIsOpen: false,
		modalType: 'details',
		movieId: 0,
	},
	screen: {
		deviceType: '',
		cardsInRow: 1,
		screenWidth: 0,
		movieCardHeight: '',
		fetchBackdropURL: '',
		fetchPosterURL: '',
	},
};

const fetchServiceSlice = createSlice({
	name: 'service',
	initialState,
	reducers: {
		defineScreenParams(state, action) {
			state.screen = { ...state.screen, ...action.payload };
			if (state.apiConfig.data !== null) {
				defineImagesFetchURL(state);
			}
		},
		toggleMobileMenu(state) {
			state.modal.mobileMenuIsOpen = !state.modal.mobileMenuIsOpen;
		},
		toggleModal(
			state,
			action: PayloadAction<{
				modalType: 'details' | 'video';
				movieId: number;
			}>,
		) {
			state.modal.modalIsOpen = !state.modal.modalIsOpen;
			state.modal = state.modal.modalIsOpen
				? {
						...state.modal,
						modalType: action.payload.modalType,
						movieId: action.payload.movieId,
					}
				: {
						...state.modal,
						modalType: 'details',
						movieId: 0,
					};
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
				(state, action: PayloadAction<ApiConfigDataT>) => {
					state.apiConfig.data = action.payload;
					state.apiConfig.status.isLoading = false;
					defineImagesFetchURL(state);
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
export const { defineScreenParams, toggleMobileMenu, toggleModal } =
	fetchServiceSlice.actions;
export const serviceReducer = fetchServiceSlice.reducer;
