import { HomePage } from './Routes/HomePage/HomePage';
import ErrorPage from './Routes/ErrorPage/ErrorPage';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import { Register } from './Routes/LoginPage/Register';
import { productsLoader } from './DataLoaders/productsLoader';
import { ProfilePage } from './Routes/ProfilePage/ProfilePage';
import { NewsPage } from './Routes/News/NewsPage';
import { newsLoader } from './DataLoaders/newsLoader';
import { NewsArticle } from './Routes/News/NewsArticle';
import { articleLoader } from './DataLoaders/articleLoader';
import { productLoader } from './DataLoaders/productLoader';
import { AddToCart } from './Routes/Store/Cart/AddToCart/AddToCart';
import { tourLoader } from './DataLoaders/tourLoader';
import { homepageLoader } from './DataLoaders/homepageLoaders';
import { Cart } from './Routes/Store/Cart/ViewCart/Cart';
import { CheckoutDetails } from './Routes/Store/Checkout/CheckoutDetails';
import { Shipping } from './Routes/Store/Checkout/Shipping/Shipping';
import { Payment } from './Routes/Store/Checkout/Payment/Payment';
import { RootWrapper } from './Routes/RouteWrappers/rootWrapper';
import { CheckoutWrapper } from './Routes/RouteWrappers/CheckoutWrapper';
import { OrderConfirmation } from './Routes/Store/Checkout/OrderConfirmation/OrderConfirmation';
import { ordersLoader } from './DataLoaders/ordersLoader';
import { Tour } from './Routes/Tour/Tour';
import { LoginPage } from './Routes/LoginPage/LoginPage';
import { Store } from './Routes/Store/Store';
import { StoreWrapper } from './Routes/RouteWrappers/StoreWrapper';
import { PrivateRoute } from './Routes/RouteWrappers/PrivateRoute';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootWrapper />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} loader={homepageLoader} />
        <Route path="news">
          <Route index element={<NewsPage />} loader={newsLoader} />
          <Route path="article/:id" element={<NewsArticle />} loader={articleLoader} />
        </Route>
        <Route path="tour" element={<Tour />} loader={tourLoader} />
        <Route path="store/:category?" element={<StoreWrapper />}>
          <Route index element={<Store />} loader={productsLoader} />
          <Route path="add-to-cart/:id" element={<AddToCart />} loader={productLoader} />
          <Route path="view-cart" element={<Cart />} />
          <Route path="checkout" element={<CheckoutWrapper />}>
            <Route path="details" element={<CheckoutDetails />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Route>
        <Route path="order-confirmation/:email/:orderId" element={<OrderConfirmation />} />
        <Route path="login/:registeredEmail?" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
        <Route
          path="/profile/:email?"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
          loader={ordersLoader}
        />
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
