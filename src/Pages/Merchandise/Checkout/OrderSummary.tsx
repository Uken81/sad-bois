import { useContext, useEffect } from 'react';
import { CartContext, CartContextType } from '../../../Context/CartContext';
import { currencyFormatter } from '../../../Utils/formatCurency';
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
