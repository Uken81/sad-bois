import { useStore } from '../Stores/useStore';

export const useIsLoggedIn = () => {
  const user = useStore((state) => state.userState.user);

  return !!user;
};
