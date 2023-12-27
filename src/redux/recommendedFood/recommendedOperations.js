import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuth } from 'redux/auth/authOperations';

export const fetchAllRecommendedProduct = createAsyncThunk(
  'recommended/fetchAllRecommendedProduct',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuth(persistedToken);
    try {
      const { data } = await axios.get('/recommended-food');
      return data.allRecommendedFood;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);
