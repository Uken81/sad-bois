import { useBoundStore } from '../Stores/useStore';

export const useIsLoggedIn = () => {
  const user = useBoundStore((state) => state.user);

  return !!user;
};
