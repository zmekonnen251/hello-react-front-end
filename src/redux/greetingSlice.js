import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  greeting: [],
  error: '',
};

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', () => axios
  .get('http://localhost:5000/api/v1/greetings')
  .then((response) => response.data));

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.loading = false;
      state.greeting = action.payload;
      state.error = '';
    });

    builder.addCase(fetchGreeting.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.greeting = [];
    });
  },
});

export default greetingSlice.reducer;
