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
import { ReactNode, useEffect, useState } from 'react';
import { User, UserContext } from './context';
import { ProfilePage } from './Pages/ProfilePage/ProfilePage';
import { validateUser } from './Utils/validateUser';

interface ChildrenProps {
  children: ReactNode;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isValidated, setIsValidated] = useState<boolean>(false);

  const Root = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  const PrivateRoute: React.FC<ChildrenProps> = ({ children }) => {
    useEffect(() => {
      async function checkAuth() {
        const auth = await validateUser();
        setIsValidated(auth);
      }
      console.log('validateUser');
      checkAuth();
    }, []);
    console.log('auth', isValidated);
    return isValidated ? <>{children}</> : <Navigate to="/login" />;
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
      </Route>
    )
  );

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;
