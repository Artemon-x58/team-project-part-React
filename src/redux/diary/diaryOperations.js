import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMealData = createAsyncThunk(
  'diary/fetchMealData',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('user/food-intake');
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const updateMealData = createAsyncThunk(
  'diary/updateMealData',
  async ({ id, mealData, thunkAPI }) => {
    try {
      const { data } = await axios.put(`user/food-intake/${id}`, mealData);
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const deleteMealData = createAsyncThunk(
  'diary/deleteMealData',
  async ({ id, title, thunkAPI }) => {
    try {
      const { data } = await axios.delete(`user/food-intake/${id}`);
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);
