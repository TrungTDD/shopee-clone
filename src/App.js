import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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

function App() {
  const router = createBrowserRouter([
    { path: path.home, element: <Home /> },
    { path: path.productDetail, element: <ProductDetail /> },
    {
      path: path.user,
      element: (
        <UnauthenticatedGuard>
          <User />
        </UnauthenticatedGuard>
      )
    },
    {
      path: path.login,
      element: (
        <AuthenticatedGuard>
          <Login />
        </AuthenticatedGuard>
      )
    },
    { path: path.register, element: <Register /> },
    { path: path.notFound, element: <NotFound /> }
  ]);
  return (
    <>
      <RouterProvider router={router} />;
      <ToastContainer />
    </>
  );
}

export default App;
