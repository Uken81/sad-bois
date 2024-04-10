import { useLocation } from 'react-router';
import { checkoutStages } from '../Routes/Store/Checkout/BreadCrumbs/checkoutStages';

/**
 * Derives the current checkout stage by comparing the current locations url to the urlKey properties of the checkout stage objects in the checkoutStages array.
 */

export const useGetLocationsCheckoutStage = () => {
  const location = useLocation();

  const locationCheckoutStage = checkoutStages.find((stage) => location.pathname === stage.urlkey);
  if (!locationCheckoutStage) {
    return null;
  }

  return locationCheckoutStage.stageNumber;
};
