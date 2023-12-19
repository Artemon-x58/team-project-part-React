import { createSlice } from '@reduxjs/toolkit';
import { logOut, login, register, refreshUser } from './authOperations';

const initialState = {
  user: {
    email: '',
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const loading = (state, action) => {
  state.isRefreshing = true;
};
const handleRegisterFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.isRefreshing = false;
};

const handleLogInFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
const handleLogInRejected = (state, action) => {
  state.isRefreshing = false;
};

const handleLogOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isRefreshing = false;
};
const handleLogOutRejected = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isRefreshing = false;
};

const handleRefreshUserPending = state => {
  state.isRefreshing = true;
};

const handleRefreshUserFulfilled = (state, action) => {
  // state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRefreshUserRejected = state => {
  state.isRefreshing = false;
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, loading)
      .addCase(register.fulfilled, handleRegisterFulfilled)
      .addCase(login.pending, loading)
      .addCase(login.fulfilled, handleLogInFulfilled)
      .addCase(login.rejected, handleLogInRejected)
      .addCase(logOut.pending, loading)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(logOut.rejected, handleLogOutRejected)
      .addCase(refreshUser.pending, handleRefreshUserPending)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, handleRefreshUserRejected);
  },
});

export const authReducer = authSlice.reducer;
