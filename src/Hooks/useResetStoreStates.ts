import { useStore } from '../Store/useStore';

export const useResetStoreStates = () => {
  const resetCart = useStore((state) => state.cartState.resetCart);
  const resetCustomer = useStore((state) => state.customerState.resetCustomer);

  return () => {
    resetCustomer();
    resetCart();
  };
};
