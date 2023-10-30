import { useContext, useEffect } from 'react';
import { CartContext, CartContextType } from '../../../Context/CartContext';
import { currencyFormatter } from '../../../Utils/formatCurency';
import { createOrUpdateLocalCart } from './createOrUpdateLocalCart';

export const OrderSummary: React.FC = () => {
  const { cart, setCart } = useContext(CartContext) as CartContextType;
  const cartItems = cart?.items;
  console.log('cartItems', cartItems);

  //this is used in Cart.tsx too, make reusable?
  const getLocalCart = () => {
    const localCart = localStorage.getItem('cart');
    if (localCart) {
      console.log('setCart');
      setCart(JSON.parse(localCart));
    }
  };
  useEffect(() => {
    if (cart) {
      return;
    }
    getLocalCart();
  }, []);

  return (
    <aside>
      {cartItems?.map((item) => {
        const { orderId, img, name, size, quantity, price, cost } = item;
        const formattedCost = currencyFormatter.format(cost);

        return (
          <div key={orderId} className="orders-list">
            <div className="product-img">
              {quantity}
              <h4>{img}</h4>
            </div>
            <div>
              {name}
              {size}
            </div>
            <div>{formattedCost}</div>
          </div>
        );
      })}
      <h2>{}</h2>
    </aside>
  );
};
