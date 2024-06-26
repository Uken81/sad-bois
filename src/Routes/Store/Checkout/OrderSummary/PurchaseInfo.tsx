import { useEffect, useState } from 'react';
import { calculateTax } from '../CostCalculators/calculateTax';
import { calculateOrderTotal } from '../CostCalculators/CalculateOrderTotal';
import { formatCurrency } from '../../../../Utils/Formatters/currencyFormatter';
import { useStore } from '../../../../Store/useStore';

export const PurchaseInfo: React.FC = () => {
  const cart = useStore((state) => state.cartState.cart);
  const selectedShipping = useStore((state) => state.customerState.selectedShipping);
  const [orderTotal, setOrderTotal] = useState<string | null>(null);
  const [tax, setTax] = useState<number | null>(null);

  const formattedTax = tax ? formatCurrency(tax) : null;
  const formattedSubtotal = formatCurrency(cart?.subtotal ?? null);
  const formattedShippingCost = formatCurrency(selectedShipping.shippingPrice);

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
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="font-h3">Subtotal</h3>
        <p>{formattedSubtotal ? formattedSubtotal : 'Calculating...'}</p>
      </div>
      <div className="flex flex-row justify-between">
        <h3 className="font-h3">Shipping</h3>
        <p>{formattedShippingCost}</p>
      </div>
      <div className="flex flex-row justify-between">
        <h3 className="font-h3">GST</h3>
        <p>{formattedTax ? formattedTax : 'Calculating...'}</p>
      </div>
      <div className="mt-5 flex flex-row justify-between">
        <h3 className="font-h3">Total</h3>
        <p>{orderTotal ? orderTotal : 'Calculating...'}</p>
      </div>
    </div>
  );
};
