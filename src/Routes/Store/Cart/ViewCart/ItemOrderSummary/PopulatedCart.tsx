import { useNavigate } from 'react-router';
import { CartType } from '../../../../RouteWrappers/rootWrapper';
import { ProceedToCheckout } from '../ProceedToCheckout/ProceedToCheckout';
import { Subtotal } from '../Subtotal';
import { ItemOrderSummary } from './ItemOrderSummary';

export const PopulatedCart: React.FC<{ cart: CartType | null }> = ({ cart }) => {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col items-center">
      <ItemOrderSummary cart={cart} />
      <div className="text-center">
        <Subtotal subtotal={cart?.subtotal} />
        <p>Taxes and shipping calculated at checkout</p>
      </div>
      <div className="mb-10 mt-8 flex flex-col items-center space-y-6">
        <button className="btn btn-secondary" onClick={() => navigate('/store')}>
          CONTINUE SHOPPING
        </button>
        <ProceedToCheckout />
      </div>
    </main>
  );
};
