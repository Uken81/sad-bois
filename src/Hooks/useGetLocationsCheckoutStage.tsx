import { useLocation } from 'react-router';
import { checkoutStages } from '../Routes/Store/Checkout/BreadCrumbs/checkoutStages';

export const useGetLocationsCheckoutStage = () => {
  const location = useLocation();

  const locationCheckoutStage = checkoutStages.find((stage) => location.pathname === stage.urlkey);
  if (!locationCheckoutStage) {
    return null;
  }

  return locationCheckoutStage.stageNumber;
};
