import { PiShoppingCartBold } from 'react-icons/pi';
import { useNavigate } from 'react-router';
import { CartType } from '../../Routes/RouteWrappers/rootWrapper';

export const CartLink: React.FC<{ cart: CartType | null }> = ({ cart }) => {
  const itemsInCart = cart?.items.length;
  const navigate = useNavigate();
  console.log('navCart', cart);
  if (!cart || itemsInCart === 0) {
    return null;
  }

  return (
    <div onClick={() => navigate('/store/view-cart')}>
      <PiShoppingCartBold style={{ color: 'white' }} />
      <span>({itemsInCart})</span>
    </div>
  );
};
