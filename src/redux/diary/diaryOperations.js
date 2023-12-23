import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllDiaries = createAsyncThunk(
  'diary/fetchAllDiaries',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('user/food-intake');
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const addDiaries = createAsyncThunk(
  'diary/addDiaries',
  async ({ title, array }, thunkAPI) => {
    try {
      const { data } = await axios.post('user/food-intake', {
        meals: title,
        entries: array,
      });
      console.log(data);
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const deleteDiaresById = createAsyncThunk(
  'diary/deleteDiaresById',
  async ({ id, title }, thunkAPI) => {
    try {
      const { data } = await axios.delete(`user/food-intake/${id}`, {
        params: { meals: title },
      });
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const updateDiaresById = createAsyncThunk(
  'diary/updateDiaresById',
  async ({ id, diary }, thunkAPI) => {
    try {
      const { data } = await axios.put(`user/food-intake/${id}`, {
        meals: diary.meals,
        title: diary.title,
        calories: diary.calories,
        carbohydrates: diary.carbohydrates,
        protein: diary.protein,
        fat: diary.fat,
      });
      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);
