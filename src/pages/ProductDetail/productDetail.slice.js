import { createAsyncThunk } from '@reduxjs/toolkit';
import { productsApi } from 'src/api/products.api';
import purchaseApi from 'src/api/purchase.api';
import { payloadCreator } from 'src/utils/helpes';

export const getProductDetail = createAsyncThunk(
  'products/getProductDetail',
  payloadCreator(productsApi.getProductDetail)
);

export const addToCart = createAsyncThunk('products/addToCart', payloadCreator(purchaseApi.addToCart));
