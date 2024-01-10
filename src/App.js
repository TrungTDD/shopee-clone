import './App.css';
import { createBrowserRouter, Route, RouterProvider, Routes, useNavigate } from 'react-router-dom';
import Home from 'src/pages/Home/Home';
import { path } from 'src/constants/path';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import UnauthenticatedGuard from './guards/UnauthenticatedGuard';
import User from './pages/User/User';
import AuthenticatedGuard from './guards/AuthenticatedGuard';
import ProductDetail from './pages/ProductDetail/ProductDetai';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authActions } from './pages/Auth/auth.slice';
import useAuthenticated from './hooks/useAuthenticated';
import { getPurchases } from './components/SearchBar/cart.slice';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authorizeStatus = useSelector(state => state.app.status);
  const authenticated = useAuthenticated();

  useEffect(() => {
    if (authorizeStatus === 401) {
      dispatch(authActions.unauthorize);
      navigate(path.login);
    }
  }, [authorizeStatus, dispatch, navigate]);

  useEffect(() => {
    if (authenticated) {
      dispatch(getPurchases());
    } else {
      
    }
  }, [dispatch, authenticated]);

  return (
    <>
      <Routes>
        <Route path={path.home} element={<Home />} />
        <Route path={path.productDetail} element={<ProductDetail />} />
        <Route
          path={path.user}
          element={
            <UnauthenticatedGuard>
              <User />
            </UnauthenticatedGuard>
          }
        />
        <Route
          path={path.login}
          element={
            <AuthenticatedGuard>
              <Login />
            </AuthenticatedGuard>
          }
        />
        <Route path={path.register} element={<Register />} />
        <Route path={path.notFound} element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
