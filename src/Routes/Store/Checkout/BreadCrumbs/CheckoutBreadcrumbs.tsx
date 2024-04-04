import { useState } from 'react';
import { useGetLocationsCheckoutStage } from '../../../../Hooks/useGetLocationsCheckoutStage';
import { ActiveStages } from './ActiveStages';
import { InactiveStages } from './InactiveStages';
import { useUpdateCheckoutProgression } from '../../../../Hooks/useUpdateCheckoutProgression';

export const CheckoutBreadcrumbs: React.FC = () => {
  const locationsCheckoutStage = useGetLocationsCheckoutStage();
  const [checkoutProgression, setCheckoutProgression] = useState(1);
  const updateCheckoutProgression = useUpdateCheckoutProgression();

  updateCheckoutProgression(checkoutProgression, setCheckoutProgression);

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
