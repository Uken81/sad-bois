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
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { CategoryContext, ProductCategories, User, UserContext } from './context';
import { ProfilePage } from './Pages/ProfilePage/ProfilePage';
import { validateUser } from './Utils/validateUser';
import { NewsPage } from './Pages/News/NewsPage';
import { newsLoader } from './Pages/News/DataLoaders/newsLoader';
import { NewsArticle } from './Pages/News/NewsArticle';
import { articleLoader } from './Pages/News/DataLoaders/articleLoader';
import { productLoader } from './Pages/Merchandise/ProductOrders/productLoader';
import { AddToCart } from './Pages/Merchandise/ProductOrders/AddToCart';
import { TourInfo } from './Pages/Tour/TourInfo';
import { tourLoader } from './Pages/Tour/tourLoader';
import { homepageLoader } from './Pages/HomePage/homepageLoaders';
import { Categories } from './Pages/Merchandise/Categories';
import { Cart } from './Pages/Merchandise/ProductOrders/Cart';
import { CheckoutDetails } from './Pages/Merchandise/Checkout/CheckoutDetails';
import { CartContextProvider } from './Context/CartContext';
import { OrderSummary } from './Pages/Merchandise/Checkout/OrderSummary';
import './Pages/Merchandise/Checkout/checkout.scss';
import { Shipping } from './Pages/Merchandise/Checkout/Shipping';
import { CustomerContextProvider } from './Context/CustomerContext';
import { Payment } from './Pages/Merchandise/Checkout/Payment';
import { ShippingOptionsType, shippingOptions } from './Pages/Merchandise/Checkout/shippingOptions';
export interface CheckoutContextType {
  selectedShipping: ShippingOptionsType;
  setSelectedShipping: Dispatch<SetStateAction<ShippingOptionsType>>;
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

  const Store = () => {
    //use react router context instead???
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

  const Checkout = () => {
    //this is awesome do this more!!!
    //convert customer context to router context???
    const [selectedShipping, setSelectedShipping] = useState<ShippingOptionsType>(
      shippingOptions[0]
    );
    console.log('sss', selectedShipping);
    return (
      <div className="checkout">
        <CustomerContextProvider>
          <Outlet context={{ selectedShipping, setSelectedShipping }} />
          <OrderSummary selectedShipping={selectedShipping} />
        </CustomerContextProvider>
      </div>
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
        <Route path="news">
          <Route index element={<NewsPage />} loader={newsLoader} />
          <Route path="article/:id" element={<NewsArticle />} loader={articleLoader} />
        </Route>
        <Route path="tour" element={<TourInfo />} loader={tourLoader} />
        <Route path="store" element={<Store />}>
          <Route index element={<Merchandise />} loader={productsLoader} />
          <Route path="add-to-cart/:id" element={<AddToCart />} loader={productLoader} />
          {/* Todo: change below path to viewCart*/}
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="checkout" element={<Checkout />}>
          <Route path="details" element={<CheckoutDetails />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="payment/:shippingMethod" element={<Payment />} />
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
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </UserContext.Provider>
    </>
  );
}

export default App;
