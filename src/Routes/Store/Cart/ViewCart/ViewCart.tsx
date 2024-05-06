import { PopulatedCart } from './PopulatedCart';
import { EmptyCart } from './EmptyCart';
import { useStore } from '../../../../Store/useStore';

export const ViewCart: React.FC = () => {
  const cart = useStore((state) => state.cartState.cart);

  return <>{cart?.items.length ? <PopulatedCart /> : <EmptyCart />}</>;
};
