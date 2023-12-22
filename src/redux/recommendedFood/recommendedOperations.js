import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllRecommendedProduct = createAsyncThunk(
  'recommended/fetchAllRecommendedProduct',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/recommended-food');
      return data.allRecommendedFood;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);
