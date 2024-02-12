import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router';
import { useGetCart } from '../../../../Hooks/useGetCart';
import { CartContextType } from '../../../RouteWrappers/rootWrapper';
import { RemoveItem } from './RemoveItem';
import { TermsModal } from './TermsModal';
import { Subtotal } from './Subtotal';
import { PriceDetails } from './PriceDetails';

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
    <div className="flex flex-col items-center">
      {cart?.items?.map((item) => {
        const { orderId, img, name, size, quantity, price, cost } = item;

        return (
          <div key={orderId} className="flex w-full flex-col items-center">
            <div className="m-2">
              <img src={`/Assets/Products/${img}`} className="h-24" />
            </div>

            <div className="my-4 text-center ">
              <p className="text-lg font-bold text-secondary [text-shadow:0px_0px_1px_#ffffff]">
                {name}
              </p>
              <p className="uppercase">{size}</p>
              <RemoveItem productOrder={item} />
            </div>
            <PriceDetails productOrder={item} />
            <div className="divider md:w-3/4 md:self-center lg:w-2/3 xl:w-1/3" />
          </div>
        );
      })}
      <div className="text-center">
        <Subtotal subtotal={cart?.subtotal} />
        <p>Taxes and shipping calculated at checkout</p>
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
    </div>
  );
};
