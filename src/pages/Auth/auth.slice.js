import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authApi from 'src/api/auth.api';
import LocalStorage from 'src/constants/localStorage';

export const register = createAsyncThunk('auth/register', async (data, thunkApi) => {
  try {
    const response = await authApi.register(data);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const login = createAsyncThunk('auth/login', async (data, thunkApi) => {
  try {
    const res = await authApi.login(data);
    return res;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

function handleAuthFullfiled(state, action) {
  const { user, access_token } = action.payload.data;
  state.user = user;
  state.accessToken = access_token;
  localStorage.setItem(LocalStorage.user, JSON.stringify(state.user));
  localStorage.setItem(LocalStorage.accessToken, access_token);
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem(LocalStorage.user)) || {},
    accessToken: localStorage.getItem(LocalStorage.accessToken)
  },
  reducers: {
    logout(state) {
      state.user = {};
      state.accessToken = undefined;
      localStorage.removeItem(LocalStorage.user);
      localStorage.removeItem(LocalStorage.accessToken);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        handleAuthFullfiled(state, action);
      })
      .addCase(login.fulfilled, (state, action) => {
        handleAuthFullfiled(state, action);
      })
      .addCase(login.rejected, (state, action) => {
        console.log(action.payload);
        // handleAuthFullfiled(state, action);
      });
  }
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
