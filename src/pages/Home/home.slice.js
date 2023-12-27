import { createAsyncThunk } from '@reduxjs/toolkit';
import categoriesApi from 'src/api/categories.api';
import { productsApi } from 'src/api/products.api';
import { payloadCreator } from 'src/utils/helpes';

export const getCategories = createAsyncThunk('home/getCategories', payloadCreator(categoriesApi.getCategories));

export const getProducts = createAsyncThunk('home/getProducts', payloadCreator(productsApi.getProducts));
