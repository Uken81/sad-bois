import { PiShoppingCartBold } from 'react-icons/pi';
import { useNavigate } from 'react-router';
import { CartType } from '../../Routes/RouteWrappers/rootWrapper';

export const CartLink: React.FC<{ cart: CartType | null }> = ({ cart }) => {
  const itemsInCart = cart?.items.length;
  const navigate = useNavigate();
  if (!cart || itemsInCart === 0) {
    return null;
  }
  console.log('items', itemsInCart);
  return (
    <div className="indicator" onClick={() => navigate('/store/view-cart')}>
      {/* <span className="indicator-item badge badge-secondary h-0">{itemsInCart}</span> */}
      <div>
        <PiShoppingCartBold />
      </div>
    </div>
  );
};
