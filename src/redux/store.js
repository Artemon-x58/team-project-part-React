import { configureStore } from '@reduxjs/toolkit';
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
import { authReducer } from './auth/authSlice';
import { statisticsReducer } from './statistics/statisticsSlice';
import { diariesReducer } from './diary/diarySlice';
import { recommendedReducer } from './recommendedFood/recommendedSlice';
import { graphsReducer } from './graphs/graphsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

const statisticsPersistConfig = {
  key: 'statistics',
  storage,
  whitelist: ['user'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    statistics: persistReducer(statisticsPersistConfig, statisticsReducer),
    diaries: diariesReducer,
    recommendedFoodPage: recommendedReducer,
    graphs: graphsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
