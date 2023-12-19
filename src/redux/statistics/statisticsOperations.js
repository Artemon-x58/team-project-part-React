import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllStatistics = createAsyncThunk(
  'statistics/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/user/current');

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);
