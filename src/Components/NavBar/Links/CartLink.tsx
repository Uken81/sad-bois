import { PiShoppingCartBold } from 'react-icons/pi';
import { useNavigate } from 'react-router';
import { useStore } from '../../../Store/useStore';

export const CartLink: React.FC = () => {
  const cart = useStore((state) => state.cartState.cart);
  const navigate = useNavigate();
  const numberOfItems = cart?.items.length.toString();
  const isCartEmpty = !cart || !cart.items.length;

  if (isCartEmpty) {
    return null;
  }

  return (
    <div className="indicator cursor-pointer" onClick={() => navigate('/store/view-cart')}>
      <div className="badge indicator-item badge-accent h-[15px] w-[15px] rounded-full border-2 p-0">
        <div className="text-[7px] font-bold">{numberOfItems}</div>
      </div>
      <div className="text-secondary">
        <PiShoppingCartBold />
      </div>
    </div>
  );
};
