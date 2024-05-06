import { useNavigate } from 'react-router';
import { ProceedToCheckout } from './ProceedToCheckout/ProceedToCheckout';
import { Subtotal } from './Subtotal';
import { OrderItemsSummary } from './OrderItemsSummary/OrderItemsSummary';
import { useStore } from '../../../../Store/useStore';

export const PopulatedCart: React.FC = () => {
  const selectedCategory = useStore((state) => state.categoryState.selectedCategory);
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center">
      <OrderItemsSummary />
      <div className="text-center">
        <Subtotal />
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
