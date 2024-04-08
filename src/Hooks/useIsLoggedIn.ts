import { useUserStore } from '../Stores/userStore';

export const useIsLoggedIn = () => {
  const user = useUserStore((state) => state.user);

  return !!user;
};
