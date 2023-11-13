import { useContext, useEffect } from 'react';
import { CartContext, CartContextType, CartType } from '../../../Context/CartContext';
import { currencyFormatter } from '../../../Utils/currencyFormatter';
import { useRefreshCart } from '../../../Hooks/useRefreshCart';
import { CustomerContext, CustomerContextType } from '../../../Context/CustomerContext';
import { ShippingOptionsType } from './Shipping';

export const OrderSummary: React.FC = () => {
  const { cart } = useContext(CartContext) as CartContextType;
  const { customer } = useContext(CustomerContext) as CustomerContextType;
  const cartItems = cart?.items;
  const shipping = customer?.selectedShipping;
  const refreshCart = useRefreshCart();

  useEffect(() => {
    if (!cart) {
      refreshCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calculateTax = () => {
    if (cart?.subtotal && shipping?.price) {
      const total = cart.subtotal + shipping.price;

      const tax = total * 0.1;
      return tax;
    }
  };
  const tax = calculateTax();

  const calculateOrderTotal = (cart?: CartType, shipping?: ShippingOptionsType, tax?: number) => {
    if (cart?.subtotal === undefined) {
      throw new Error('Cart subtotal is undefined');
    }
    if (shipping?.price === undefined) {
      throw new Error('Shipping price is undefined');
    }
    if (tax === undefined) {
      throw new Error('Tax is undefined');
    }

    return cart.subtotal + shipping.price + tax;
  };

  let orderTotal;
  try {
    const total = calculateOrderTotal(cart, shipping, tax);
    orderTotal = currencyFormatter.format(total);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      //todo: display error message to user. Handle error!
    }
  }

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
        <p>{shipping?.price}</p>
        <h3>GST</h3>
        <p>{tax}</p>
      </div>
      <div className="total" style={{ marginTop: '20px' }}>
        <h3>Total</h3>
        <p>{orderTotal}</p>
      </div>
    </aside>
  );
};
