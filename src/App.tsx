import { Navbar } from './Components/NavBar/Navbar';
import { HomePage } from './Pages/HomePage/HomePage';
import { Merchandise } from './Pages/Merchandise/Merchandise';
import { Login } from './Pages/Login/Login';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import './App.scss';
import { Register } from './Pages/Login/Register';
import { ProductsLoader } from './Pages/Merchandise/productsLoader';
import { OrderProduct } from './Pages/ProductOrders/ProductOrders';
import { itemLoader } from './Pages/ProductOrders/itemLoader';
import { useMemo, useState } from 'react';
import { User, UserContext } from './context';
import { ProfilePage } from './Pages/ProfilePage/ProfilePage';
import { validateUser } from './Utils/validateUser';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const userValue = useMemo(
    () => ({
      user,
      setUser
    }),
    [user, setUser]
  );

  const Root = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  // function PrivateOutlet() {
  //   const auth = true;
  //   return auth ? <Outlet /> : <Navigate to="/login" />;
  // }
  const test = async () => {
    const auth = await validateUser();
    console.log('auth1', auth);

    return auth;
  };
  const PrivateRoute = ({ children }) => {
    const move = true;
    const auth = test();
    console.log('auth2', auth);
    return move ? <>{children}</> : <Navigate to="/login" />;
    // return auth ? <>{children}</> : <Navigate to="/login" />;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path="merchandise" element={<Merchandise />} loader={ProductsLoader} />
        <Route path="order-product/:id" element={<OrderProduct />} loader={itemLoader} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route
          path="/private"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        {/* <Route path="/private-outlet" element={<PrivateOutlet />}>
          <Route element={<ProfilePage />} />
        </Route> */}
      </Route>
    )
  );

  return (
    <>
      <UserContext.Provider value={userValue}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;
