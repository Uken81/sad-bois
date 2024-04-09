import { useEffect } from 'react';
import { useOutletContext } from 'react-router';
import { useGetCart } from '../../../../Hooks/useGetCart';
import { CartContextType } from '../../../RouteWrappers/RootWrapper';
import { PopulatedCart } from './PopulatedCart';
import { EmptyCart } from './EmptyCart';
import { useBoundStore } from '../../../../Stores/boundStore';

export const ViewCart: React.FC = () => {
  const getCart = useGetCart();

  useEffect(() => {
    if (!cart) {
      const retrievedCart = getCart();
      setCart(retrievedCart);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{cart?.items.length ? <PopulatedCart cart={cart} /> : <EmptyCart />}</>;
};
