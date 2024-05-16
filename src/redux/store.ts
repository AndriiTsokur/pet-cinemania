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

import { libraryReducer, serviceReducer } from '@/redux/slices';
// import { fetchedIssuesReducer } from './fetchedIssuesSlice';

const libraryPersistConfig = {
	key: 'cinemania',
	storage,
	whitelist: ['isDarkMode', 'libraryState'],
};

const persistedReducer = persistReducer(libraryPersistConfig, libraryReducer);

const reducers = combineReducers({
	library: persistedReducer,
	service: serviceReducer,
	// fetchedIssues: fetchedIssuesReducer,
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

export const persistor = persistStore(store);
