import { PopulatedCart } from './PopulatedCart';
import { EmptyCart } from './EmptyCart';
import { useBoundStore } from '../../../../Stores/boundStore';

export const ViewCart: React.FC = () => {
  const cart = useBoundStore((state) => state.cart);

  return <>{cart?.items.length ? <PopulatedCart /> : <EmptyCart />}</>;
};
