import { useBoundStore } from '../Stores/boundStore';

export const useIsLoggedIn = () => {
  const user = useBoundStore((state) => state.user);

  return !!user;
};
