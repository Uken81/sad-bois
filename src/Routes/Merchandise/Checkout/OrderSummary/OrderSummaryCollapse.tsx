import { MobileCollapse } from '../../../../Components/MobileCollapse';
import { OrderSummary } from './OrderSummary';
import { ShippingOptionsType } from '../Shipping/shippingOptions';

export const OrderSummaryCollapse: React.FC<{
  selectedShipping: ShippingOptionsType;
  subtotal: number | null;
}> = ({ selectedShipping, subtotal }) => {
  const subtotalString = subtotal ? subtotal?.toString() : '';

  return (
    <MobileCollapse
      closedText="Show order summary"
      openText="Hide order summary"
      subtitle={`$${subtotalString}`}>
      <OrderSummary selectedShipping={selectedShipping} />
    </MobileCollapse>
  );
};
