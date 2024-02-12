import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router';
import { useGetCart } from '../../../../Hooks/useGetCart';
import { CartContextType } from '../../../RouteWrappers/rootWrapper';
import { TermsModal } from './TermsModal';
import { Subtotal } from './Subtotal';
import { ItemOrderSummary } from './ItemOrderSummary/ItemOrderSummary';

export const Cart = () => {
  const { cart, setCart } = useOutletContext() as CartContextType;
  const [showModal, setShowModal] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);
  const navigate = useNavigate();
  const getCart = useGetCart();

  useEffect(() => {
    if (!cart) {
      const retrievedCart = getCart();
      setCart(retrievedCart);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const proceedToCheckout = () => {
    if (!hasAgreed) {
      setShowModal(true);
      return;
    }
    navigate('/store/checkout/details');
  };

  return (
    <main className="flex flex-col items-center">
      <ItemOrderSummary cart={cart} />
      <div className="text-center">
        <Subtotal subtotal={cart?.subtotal} />
        <p>Taxes and shipping calculated at checkout</p>I
      </div>
      <TermsModal showModal={showModal} setShowModal={setShowModal} />
      <div className="mb-10 flex flex-col items-center space-y-6">
        <button className="btn" onClick={() => navigate('/store')}>
          CONTINUE SHOPPING
        </button>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              checked={hasAgreed}
              className="checkbox mx-2"
              onChange={() => setHasAgreed(!hasAgreed)}
            />
            <span className="label-text">
              By making this purchase I agree to the terms and conditions.
            </span>
          </label>
        </div>
        <button className="btn btn-secondary mb-2" onClick={proceedToCheckout}>
          CHECKOUT
        </button>
      </div>
    </main>
  );
};
