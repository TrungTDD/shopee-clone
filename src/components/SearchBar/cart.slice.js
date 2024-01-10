import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import purchaseApi from 'src/api/purchase.api';
import { logout } from 'src/pages/Auth/auth.slice';
import { payloadCreator } from 'src/utils/helpes';

export const getPurchases = createAsyncThunk('purchases/getPurchases', payloadCreator(purchaseApi.getPurchases));

const cartSlice = createSlice({
  name: 'purchases',
  initialState: {
    products: []
  },
  extraReducers: builder => {
    builder
      .addCase(getPurchases.fulfilled, (state, action) => {
        state.products = action.payload.data;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.products = [];
      });
  }
});

export const cartReducer = cartSlice.reducer;
