import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './pages/Auth/auth.slice';
import { appReducer } from './app.slice';

const store = configureStore({
  reducer: { auth: authReducer, app: appReducer },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;
