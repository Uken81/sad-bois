import { MobileCollapse } from '../../../../Components/MobileCollapse';
import { OrderSummary } from './OrderSummary';
import { useStore } from '../../../../Store/useStore';
import { formatCurrency } from '../../../../Utils/Formatters/currencyFormatter';

export const OrderSummaryCollapse: React.FC = () => {
  const cart = useStore((state) => state.cartState.cart);
  const subtotalString = cart?.subtotal ? formatCurrency(cart?.subtotal) : '';

  return (
    <div>
      <MobileCollapse closedText="Show order summary" openText="Hide order summary" subtitle={`${subtotalString}`}>
        <OrderSummary />
      </MobileCollapse>
    </div>
  );
};
