import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './pages/Auth/auth.slice';

const store = configureStore({
  reducer: { auth: authReducer }
});

export default store;
