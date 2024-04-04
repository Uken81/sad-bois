import { useGetLocationsCheckoutStage } from '../../../../Hooks/useGetLocationsCheckoutStage';
import { ActiveStages } from './ActiveStages';
import { InactiveStages } from './InactiveStages';

export const CheckoutBreadcrumbs: React.FC<{ checkoutProgression: number }> = ({ checkoutProgression }) => {
  const locationsCheckoutStage = useGetLocationsCheckoutStage();
  const displayBreadcrumbs = locationsCheckoutStage !== null;

  return (
    <>
      {displayBreadcrumbs ? (
        <div className="breadcrumbs ml-5 text-xs">
          <ul>
            <ActiveStages checkoutProgression={checkoutProgression} />
            <InactiveStages checkoutProgression={checkoutProgression} />
          </ul>
        </div>
      ) : null}
    </>
  );
};
