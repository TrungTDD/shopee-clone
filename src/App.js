import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from 'src/pages/Home/Home';
import { path } from 'src/constants/path';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const router = createBrowserRouter([
    { path: path.home, element: <Home /> },
    { path: path.login, element: <Login /> },
    { path: path.register, element: <Register /> },
    { path: path.notFound, element: <NotFound /> }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
