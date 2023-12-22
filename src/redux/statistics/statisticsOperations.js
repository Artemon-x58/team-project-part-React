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

export const addWaterIntake = createAsyncThunk(
  'statistics/addWaterIntake',
  async (quantity, thunkAPI) => {
    try {
      const { data } = await axios.post('/user/water-intake', {
        water: quantity,
      });

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const removeWaterIntake = createAsyncThunk(
  'statistics/removeWaterIntake',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.delete('/user/water-intake', {
        water: 0,
      });

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);
