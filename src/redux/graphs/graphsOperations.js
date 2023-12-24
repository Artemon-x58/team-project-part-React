import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllValues = createAsyncThunk(
    'graphsValues/fetchAllValues',
    async (month, thunkAPI) => {
    try {
        const { data } = await axios.get(`/user/statistics?month=${month}`);
        return data;
    } catch ({ message }) {
        return thunkAPI.rejectWithValue({ message });
        
    }
}) 