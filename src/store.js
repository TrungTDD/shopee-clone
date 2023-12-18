import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './pages/Auth/auth.slice';

const store = configureStore({
  reducer: { auth: authReducer },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;
