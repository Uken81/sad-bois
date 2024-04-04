import { useOutletContext } from 'react-router';
import { useGetLocationsCheckoutStage } from './useGetLocationsCheckoutStage';
import { CheckoutStageContext } from '../Routes/RouteWrappers/StoreWrapper';

export const useUpdateCheckoutProgression = () => {
  const { checkoutProgression, setCheckoutProgression } = useOutletContext() as CheckoutStageContext;
  const locationStage = useGetLocationsCheckoutStage() ?? 1;

  const assignStage = () => {
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
