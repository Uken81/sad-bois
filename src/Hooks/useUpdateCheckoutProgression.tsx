import { useGetLocationsCheckoutStage } from './useGetLocationsCheckoutStage';
import { Dispatch, SetStateAction } from 'react';

/**
 * Will increment the checkout progression if the current locations designated checkout stage is greter than the current checkout progression level.
 */

export const useUpdateCheckoutProgression = () => {
  const locationStage = useGetLocationsCheckoutStage() ?? 1;

  const assignStage = (checkoutProgression: number, setCheckoutProgression: Dispatch<SetStateAction<number>>) => {
    if (!checkoutProgression) {
      return;
    }

    if (locationStage <= checkoutProgression) {
      return;
    }

    setCheckoutProgression(locationStage);
  };

  return assignStage;
};
