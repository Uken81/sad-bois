import { HomePage } from './Routes/HomePage/HomePage';
import { Merchandise } from './Routes/Merchandise/Merchandise';
import ErrorPage from './Routes/ErrorPage/ErrorPage';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import { Register } from './Routes/LoginPage/Register';
import { productsLoader } from './Routes/Merchandise/productsLoader';
import { ProfilePage } from './Routes/ProfilePage/ProfilePage';
import { NewsPage } from './Routes/News/NewsPage';
import { newsLoader } from './Routes/News/DataLoaders/newsLoader';
import { NewsArticle } from './Routes/News/NewsArticle';
import { articleLoader } from './Routes/News/DataLoaders/articleLoader';
import { productLoader } from './Routes/Merchandise/Cart/productLoader';
import { AddToCart } from './Routes/Merchandise/Cart/AddToCart/AddToCart';
import { tourLoader } from './Routes/Tour/tourLoader';
import { homepageLoader } from './Routes/HomePage/homepageLoaders';
import { Cart } from './Routes/Merchandise/Cart/Cart';
import { CheckoutDetails } from './Routes/Merchandise/Checkout/CheckoutDetails';
import { Shipping } from './Routes/Merchandise/Checkout/Shipping/Shipping';
import { Payment } from './Routes/Merchandise/Checkout/Payment/Payment';
import { Root } from './Routes/RouteWrappers/rootWrapper';
import { Store } from './Routes/RouteWrappers/storeWrapper';
import { Checkout } from './Routes/RouteWrappers/checkoutWrapper';
import { PrivateRoute } from './Routes/RouteWrappers/privateRoute';
import { OrderConfirmation } from './Routes/Merchandise/Checkout/OrderConfirmation/OrderConfirmation';
import { ordersLoader } from './Routes/ProfilePage/ordersLoader';
import { Tour } from './Routes/Tour/Tour';
import { LoginPage } from './Routes/LoginPage/Login';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} loader={homepageLoader} />
        <Route path="news">
          <Route index element={<NewsPage />} loader={newsLoader} />
          <Route path="article/:id" element={<NewsArticle />} loader={articleLoader} />
        </Route>
        <Route path="tour" element={<Tour />} loader={tourLoader} />
        <Route path="store" element={<Store />}>
          <Route index element={<Merchandise />} loader={productsLoader} />
          <Route path="add-to-cart/:id" element={<AddToCart />} loader={productLoader} />
          <Route path="view-cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />}>
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
