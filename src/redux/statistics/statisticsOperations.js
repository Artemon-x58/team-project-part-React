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

export const addFoodIntake = createAsyncThunk(
  'statistics/addFoodIntake',
  async ({ meals, entries }) => {
    try {
      const response = await axios.post('/user/food-intake', {
        meals,
        entries,
      });

      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const removeFoodIntake = createAsyncThunk(
  'statistics/removeFoodIntake',
  async (mealType, thunkAPI) => {
    try {
      const { data } = await axios.delete('/user/food-intake', {
        data: { meals: mealType },
      });

      return { newCaloriesAndDate: data.newCaloriesAndDate, mealType };
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);
