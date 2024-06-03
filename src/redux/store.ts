import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
	detailsReducer,
	localReducer,
	searchResultsReducer,
	serviceReducer,
	trendingReducer,
	upcomingReducer,
} from '@/redux/slices';

const libraryPersistConfig = {
	key: 'cinemania',
	storage,
	whitelist: ['isDarkMode', 'movies'],
};

const persistedReducer = persistReducer(libraryPersistConfig, localReducer);

const reducers = combineReducers({
	details: detailsReducer,
	local: persistedReducer,
	searchResults: searchResultsReducer,
	service: serviceReducer,
	trending: trendingReducer,
	upcoming: upcomingReducer,
});

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
