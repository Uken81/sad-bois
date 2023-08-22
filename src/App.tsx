import { Navbar } from './Components/NavBar/Navbar';
import { HomePage } from './Routes/HomePage/HomePage';
import { Merchandise } from './Routes/Merchandise';
import { Login } from './Routes/Login/Login';
import ErrorPage from './Routes/ErrorPage/ErrorPage';
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import './App.scss';
import { Signup } from './Routes/Login/Signup';

function App() {
  const Root = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path="merchandise" element={<Merchandise />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
