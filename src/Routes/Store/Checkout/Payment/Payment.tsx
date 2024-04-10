import { PaymentDetails } from './PaymentDetails';
import { ContactDetails } from '../CustomerDetails/ContactDetails';
import { AddressDetails } from '../CustomerDetails/AdressDetails';
import { ShippingMethodDetails } from '../CustomerDetails/ShippingMethodDetails';
import { CardOptions } from './CardOptions/CardOptions';
import { useBoundStore } from '../../../../Stores/boundStore';

export const Payment: React.FC = () => {
  const customer = useBoundStore((state) => state.customer);

  if (!customer) {
    return <div className="no-data">No customer data available</div>;
  }

  return (
    <div className="mx-5 mb-4 space-y-5">
      <div className="rounded border border-base-300 bg-neutral p-4">
        <ContactDetails />
        <div className="w-9/10 divider mx-auto" />
        <AddressDetails />
        <div className="w-9/10 divider mx-auto" />
        <ShippingMethodDetails />
      </div>
      <h2 className="text-center text-h2 font-h2">Payment</h2>
      <div className="border border-base-300 bg-neutral">
        <CardOptions />
        <div className="text-center">
          <PaymentDetails />
        </div>
      </div>
    </div>
  );
};
