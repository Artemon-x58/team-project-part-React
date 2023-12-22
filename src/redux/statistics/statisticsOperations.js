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

export const updateGoal = createAsyncThunk(
  'statistics/updateGoal',
  async (value, thunkAPI) => {
    try {
      const { data } = await axios.put('/user/goal', value);
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const updateWeight = createAsyncThunk(
  'statistics/updateWeight',
  async (value, thunkAPI) => {
    try {
      const { data } = await axios.post('/user/weight', value);
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);
