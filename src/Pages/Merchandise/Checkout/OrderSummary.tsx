import { useContext, useEffect, useState } from 'react';
import { CartContext, CartContextType } from '../../../Context/CartContext';
import { ShippingOptionsType } from './shippingOptions';
import { calculateTax } from './CostCalculators/calculateTax';
import { calculateOrderTotal } from './CostCalculators/CalculateOrderTotal';
import { formatCurrency } from '../../../Utils/currencyFormatter';
import { useRepopulateCart } from '../../../Hooks/useRepopulateCart';

export const OrderSummary: React.FC<{ selectedShipping: ShippingOptionsType }> = ({
  selectedShipping
}) => {
  const { cart } = useContext(CartContext) as CartContextType;
  const [orderTotal, setOrderTotal] = useState<string | undefined>(undefined);
  const [tax, setTax] = useState<number | undefined>(undefined);
  const formattedTax = formatCurrency(tax);
  console.log('render');
  const cartItems = cart?.items;
  const refreshCart = useRepopulateCart();

  useEffect(() => {
    if (!cart) {
      refreshCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const tax = calculateTax(cart, selectedShipping);
    setTax(tax);
  }, [cart, selectedShipping]);

  useEffect(() => {
    if (tax !== undefined) {
      const orderDetails = { cart, selectedShipping, tax };
      const total = calculateOrderTotal(orderDetails);
      const formattedTotal = formatCurrency(total);
      setOrderTotal(formattedTotal);
    }
  }, [cart, selectedShipping, tax]);

  return (
    <aside>
      {cartItems?.map((item) => {
        const { orderId, img, name, size, quantity, cost } = item;
        const formattedCost = formatCurrency(cost);

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
        <p>{selectedShipping?.price}</p>
        <h3>GST</h3>
        <p>{formattedTax ? formattedTax : 'Calculating...'}</p>
      </div>
      <div className="total" style={{ marginTop: '20px' }}>
        <h3>Total</h3>
        <p>{orderTotal ? orderTotal : 'Calculating...'}</p>
      </div>
    </aside>
  );
};
