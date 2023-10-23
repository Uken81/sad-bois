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
import { productsLoader } from './Pages/Merchandise/merchandiseLoader';
import { ReactNode, useEffect, useState } from 'react';
import { CategoryContext, ProductCategories, User, UserContext } from './context';
import { ProfilePage } from './Pages/ProfilePage/ProfilePage';
import { validateUser } from './Utils/validateUser';
import { NewsPage } from './Pages/News/NewsPage';
import { newsLoader } from './Pages/News/DataLoaders/newsLoader';
import { NewsArticle } from './Pages/News/NewsArticle';
import { articleLoader } from './Pages/News/DataLoaders/articleLoader';
import { productLoader } from './Pages/Merchandise/ProductOrders/productLoader';
import { AddToCart, OrderProduct } from './Pages/Merchandise/ProductOrders/AddToCart';
import { TourInfo } from './Pages/Tour/TourInfo';
import { tourLoader } from './Pages/Tour/tourLoader';
import { homepageLoader } from './Pages/HomePage/homepageLoaders';
import { Categories } from './Pages/Merchandise/Categories';

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

  const Store = () => {
    const [selectedCategory, setSelectedCategory] = useState<ProductCategories>('all');

    return (
      <>
        <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
          <Categories />
          <Outlet />
        </CategoryContext.Provider>
      </>
    );
  };

  const PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
    useEffect(() => {
      async function checkAuth() {
        const auth = await validateUser();
        setIsValidated(auth);
      }
      console.log('validateUser');
      checkAuth();
    }, []);
    return isValidated ? <>{children}</> : <Navigate to={'/login'} />;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} loader={homepageLoader} />
        <Route path="news" element={<NewsPage />} loader={newsLoader} />
        <Route path="news/:id" element={<NewsArticle />} loader={articleLoader} />
        <Route path="tour" element={<TourInfo />} loader={tourLoader} />
        <Route path="merchandise" element={<Store />}>
          <Route index element={<Merchandise />} loader={productsLoader} />
          <Route path="order-product/:id" element={<AddToCart />} loader={productLoader} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="/profile"
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
