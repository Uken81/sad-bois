import { useContext, useEffect } from 'react';
import { CartContext, CartContextType } from '../../../Context/CartContext';
import { currencyFormatter } from '../../../Utils/currencyFormatter';
import { useRefreshCart } from '../../../Hooks/useRefreshCart';

export const OrderSummary: React.FC = () => {
  const { cart } = useContext(CartContext) as CartContextType;
  const cartItems = cart?.items;
  const refreshCart = useRefreshCart();
  console.log('cartItems', cartItems);

  useEffect(() => {
    if (!cart) {
      refreshCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <aside>
      {cartItems?.map((item) => {
        const { orderId, img, name, size, quantity, cost } = item;
        const formattedCost = currencyFormatter.format(cost);

        return (
          <div key={orderId} className="orders-list" style={{ border: '1px solid red' }}>
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
      <h2>Discount Code Goes Here</h2>
      <div>
        <h3>Subtotal</h3>
        <p>{cart?.subtotal}</p>
      </div>
      <div className="extra-costs">
        <h3>Shipping</h3>
        <p>SHIPPING COST GOES HERE</p>
        <h3>GST</h3>
        <p>GST PRICE GOES HERE</p>
      </div>
      <div className="total" style={{ marginTop: '20px' }}>
        <h3>Total</h3>
        <p>TOTAL PRICE GOES HERE</p>
      </div>
    </aside>
  );
};
