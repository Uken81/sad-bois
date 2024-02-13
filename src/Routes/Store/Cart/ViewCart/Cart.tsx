import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router';
import { useGetCart } from '../../../../Hooks/useGetCart';
import { CartContextType } from '../../../RouteWrappers/rootWrapper';
import { Subtotal } from './Subtotal';
import { ItemOrderSummary } from './ItemOrderSummary/ItemOrderSummary';
import { ProceedToCheckout } from './ProceedToCheckout/ProceedToCheckout';

export const Cart = () => {
  const { cart, setCart } = useOutletContext() as CartContextType;
  const navigate = useNavigate();
  const getCart = useGetCart();

  useEffect(() => {
    if (!cart) {
      const retrievedCart = getCart();
      setCart(retrievedCart);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
