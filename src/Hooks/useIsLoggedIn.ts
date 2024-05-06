import { useStore } from '../Store/useStore';

export const useIsLoggedIn = () => {
  const user = useStore((state) => state.userState.user);

  return !!user;
};
