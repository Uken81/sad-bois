import { useNavigate, useOutletContext } from 'react-router';
import { CartType } from '../../../RouteWrappers/RootWrapper';
import { ProceedToCheckout } from './ProceedToCheckout/ProceedToCheckout';
import { Subtotal } from './Subtotal';
import { OrderItemsSummary } from './OrderItemsSummary/OrderItemsSummary';
import { StoreCategoryContextType } from '../../../RouteWrappers/StoreWrapper';

export const PopulatedCart: React.FC<{ cart: CartType | null }> = ({ cart }) => {
  const { selectedCategory } = useOutletContext() as StoreCategoryContextType;
  const navigate = useNavigate();
  return (
    <main className="flex flex-col items-center">
      <OrderItemsSummary cart={cart} />
      <div className="text-center">
        <Subtotal subtotal={cart?.subtotal} />
        <p>Taxes and shipping calculated at checkout</p>
      </div>
      <div className="mb-10 mt-8 flex flex-col items-center space-y-6">
        <button className="btn btn-secondary" onClick={() => navigate(`/store/${selectedCategory}`)}>
          CONTINUE SHOPPING
        </button>
        <ProceedToCheckout />
      </div>
    </main>
  );
};
