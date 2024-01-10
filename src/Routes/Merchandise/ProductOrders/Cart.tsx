import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router';
import { formatCurrency } from '../../../Utils/currencyFormatter';
import { useGetCart } from '../../../Hooks/useGetCart';
import { CartContextType } from '../../RouteWrappers/rootWrapper';

export const Cart = () => {
  const { cart, setCart } = useOutletContext() as CartContextType;
  const [showModal, setShowModal] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);
  const navigate = useNavigate();
  const getCart = useGetCart();
  const formattedSubtotal = formatCurrency(cart?.subtotal ?? 0);

  useEffect(() => {
    if (!cart) {
      const retrievedCart = getCart();
      setCart(retrievedCart);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeItems = (id: string) => {
    const filteredArr = cart?.items?.filter((item) => item.orderId !== id) || [];

    setCart((prev) => ({
      ...prev,
      items: filteredArr,
      subtotal: prev?.subtotal || 0
    }));
  };

  const proceedToCheckout = () => {
    if (!hasAgreed) {
      setShowModal(true);
      return;
    }

    navigate('/store/checkout/details');
  };

  useEffect(() => {
    const modal = document.getElementById('terms-modal') as HTMLDialogElement | null;

    if (!modal) {
      console.error('Modal element is null or undefined.');
      return;
    }

    if (showModal) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [showModal]);

  useEffect(() => {
    console.log('sub', cart?.subtotal);
    console.log('cartInCart', cart);
  });

  return (
    <div className="flex flex-col items-center">
      {cart?.items?.map((item) => {
        const { orderId, img, name, size, quantity, price, cost } = item;
        const formattedPrice = formatCurrency(price);
        const formattedCost = formatCurrency(cost);

        return (
          <div key={orderId} className="flex w-full flex-col items-center">
            <div className="">
              <img src={`/Assets/Products/${img}`} className="h-24" />
            </div>

            <div className="my-4 text-center font-bold">
              <p>{name}</p>
              <p className="uppercase">{size}</p>
              <p
                className="hover:cursor-pointer hover:text-gray-400"
                onClick={() => removeItems(orderId)}>
                Remove
              </p>
            </div>
            <div className="w-full px-24">
              <div className="flex justify-between">
                <span>Price</span>
                <span>{formattedPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity</span>
                <span>{quantity}</span>
              </div>
              <div className="flex justify-between">
                <span>Cost</span>
                <span>{formattedCost}</span>
              </div>
            </div>
            <div className="divider" />
          </div>
        );
      })}
      <div className="show modal" style={{ display: 'block', position: 'initial' }}>
        <dialog id="terms-modal" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
                onClick={() => setShowModal(false)}>
                ✕
              </button>
            </form>
            <h3 className="text-lg font-bold">Error Adding Items</h3>
            <p className="py-4">You must agree to the terms and conditions.</p>
          </div>
        </dialog>
      </div>
      <div className="mb-10 flex flex-col items-center space-y-6">
        <div className="text-center">
          <p className="text-lg font-bold">Subtotal {formattedSubtotal}</p>
          <p>Taxes and shipping calculated at checkout</p>
        </div>
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
        <button className="btn" onClick={proceedToCheckout}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};
