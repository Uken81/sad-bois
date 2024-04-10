import { useBoundStore } from '../Stores/boundStore';

/**
 * Checks global state for the existance of user state and returns a boolean to signify if the current user is logged in.
 */

export const useIsLoggedIn = () => {
  const user = useBoundStore((state) => state.user);

  return !!user;
};
