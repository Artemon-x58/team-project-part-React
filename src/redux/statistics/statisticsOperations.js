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
        params: { meals: mealType },
      });

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const updateUser = createAsyncThunk(
  'statistics/updateUser',
  async (value, thunkAPI) => {
    try {
      const { data } = await axios.put('/user/update', value);
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'statistics/updateAvatar',
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);

      const { data } = await axios.patch('/user/avatars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);
