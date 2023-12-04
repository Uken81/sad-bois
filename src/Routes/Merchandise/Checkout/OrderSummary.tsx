import { useEffect, useState } from 'react';
import { ShippingOptionsType } from './shippingOptions';
import { calculateTax } from './CostCalculators/calculateTax';
import { calculateOrderTotal } from './CostCalculators/CalculateOrderTotal';
import { formatCurrency } from '../../../Utils/currencyFormatter';
import { useRepopulateCart } from '../../../Hooks/useRepopulateCart';
import { useOutletContext } from 'react-router';
import { CartContextType } from '../../RouteWrappers/storeWrapper';

export const OrderSummary: React.FC<{ selectedShipping: ShippingOptionsType }> = ({
  selectedShipping
}) => {
  const { cart } = useOutletContext() as CartContextType;
  const [orderTotal, setOrderTotal] = useState<string | null>(null);
  const [tax, setTax] = useState<number | null>(null);
  const formattedTax = formatCurrency(tax);
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
    if (tax) {
      setTax(tax);
    }
  }, [cart, selectedShipping]);

  useEffect(() => {
    if (tax && cart) {
      const orderDetails = { cart, selectedShipping, tax };
      const total = calculateOrderTotal(orderDetails);
      const formattedTotal = formatCurrency(total);
      setOrderTotal(formattedTotal ?? null);
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
        <p>{cart?.subtotal ? cart.subtotal : 'Calculating...'}</p>
      </div>
      <div className="extra-costs">
        <h3>Shipping</h3>
        <p>{selectedShipping?.shippingPrice}</p>
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
