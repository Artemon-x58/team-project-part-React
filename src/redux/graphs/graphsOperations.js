import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuth } from 'redux/auth/authOperations';

export const fetchAllValues = createAsyncThunk(
  'graphsValues/fetchAllValues',
  async (month, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuth(persistedToken);
    try {
      const { data } = await axios.get(`/user/statistics?month=${month}`);
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);
