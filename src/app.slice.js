import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    status: 200
  },
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected'),
      (state, action) => {
        state.status = action.payload.status;
      }
    );
  }
});

export const appReducer = appSlice.reducer;
