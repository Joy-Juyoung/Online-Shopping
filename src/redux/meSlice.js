import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import meService from './meService';

// const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  me: '',
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getMe = createAsyncThunk('me/getMe', async () => {
  await meService.getMe();
});

export const meSlice = createSlice({
  name: 'me',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.me = action.payload;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.me = null;
      });
  },
});

export const { reset } = meSlice.actions;
export default meSlice.reducer;
