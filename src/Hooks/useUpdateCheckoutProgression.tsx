import { useGetLocationsCheckoutStage } from './useGetLocationsCheckoutStage';
import { Dispatch, SetStateAction } from 'react';

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
