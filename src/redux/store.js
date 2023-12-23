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
import { recommendedReducer } from './recommendedFood/recommendedSlice';
import { diaresReducer } from './diary/diarySlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
// const statisticsPersistConfig = {
//   key: 'statistics',
//   storage,
//   whitelist: ['user'],
// };

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    statistics: statisticsReducer,
    recommendedFoodPage: recommendedReducer,
    diaries: diaresReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
