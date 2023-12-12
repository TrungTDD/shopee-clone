import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authApi from 'src/api/auth.api';
import LocalStorage from 'src/constants/localStorage';

export const register = createAsyncThunk('auth/register', async (data, thunkApi) => {
  try {
    const response = await authApi.register(data);
    return response;
  } catch (error) {
    console.log(error);
    return thunkApi.rejectWithValue(error);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    profile: { profile: localStorage.getItem(LocalStorage.user) || {} }
  },
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.profile = action.payload;
      localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile));
    });
  }
});

export const authReducer = authSlice.reducer;
