import { MobileCollapse } from '../../../../Components/MobileCollapse';
import { OrderSummary } from './OrderSummary';
import { ShippingOptionsType } from '../Shipping/shippingOptions';
import { useBoundStore } from '../../../../Stores/boundStore';
import { formatCurrency } from '../../../../Utils/Formatters/currencyFormatter';

export const OrderSummaryCollapse: React.FC<{
  selectedShipping: ShippingOptionsType;
}> = ({ selectedShipping }) => {
  const cart = useBoundStore((state) => state.cart);
  const subtotalString = cart?.subtotal ? formatCurrency(cart?.subtotal) : '';

  return (
    <div>
      <MobileCollapse closedText="Show order summary" openText="Hide order summary" subtitle={`${subtotalString}`}>
        <OrderSummary selectedShipping={selectedShipping} />
      </MobileCollapse>
    </div>
  );
};
