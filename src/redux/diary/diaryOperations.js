import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuth } from 'redux/auth/authOperations';

export const fetchAllDiaries = createAsyncThunk(
  'diary/fetchAllDiaries',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuth(persistedToken);
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
  async ({ meals, entries }, thunkAPI) => {
    try {
      const response = await axios.post('user/food-intake', {
        meals,
        entries,
      });
      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const deleteDiariesById = createAsyncThunk(
  'diary/deleteDiariesById',
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

export const updateDiariesById = createAsyncThunk(
  'diary/updateDiariesById',
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
