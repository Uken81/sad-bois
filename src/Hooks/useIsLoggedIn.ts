import { useStore } from '../Store/useStore';

/**
 * Checks global state for the existance of user state and returns a boolean to signify if the current user is logged in.
 */

export const useIsLoggedIn = () => {
  const user = useStore((state) => state.userState.user);

  return !!user;
};
