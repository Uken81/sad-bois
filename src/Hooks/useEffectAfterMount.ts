import { useEffect, useRef, EffectCallback, DependencyList } from 'react';

/**
 * A custom hook that skips the effect on the initial render.
 * @param {Function} effect - The effect callback.
 * @param {Array} deps - The dependency list for the effect.
 */

export const useEffectAfterMount = (effect: EffectCallback, deps: DependencyList) => {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) {
      return effect();
    }
    hasMounted.current = true;
  }, deps);
};
