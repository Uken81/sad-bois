import { useOutletContext } from 'react-router';
import { CustomerContextType } from '../../../RouteWrappers/checkoutWrapper';
import { useGetCustomer } from '../../../../Hooks/useGetCustomer';
import { PaymentDetails } from './PaymentDetails';
import { useEffect } from 'react';
import { ContactDetails } from '../CustomerDetails/ContactDetails';
import { AddressDetails } from '../CustomerDetails/AdressDetails';
import { ShippingMethodDetails } from '../CustomerDetails/ShippingMethodDetails';
import { CardOptions } from './CardOptions/CardOptions';

export const Payment: React.FC = () => {
  const outletContext = useOutletContext();
  const { customer, setCustomer } = outletContext as CustomerContextType;
  const getCustomer = useGetCustomer();

  useEffect(() => {
    if (!customer) {
      const retrievedCustomer = getCustomer();
      setCustomer(retrievedCustomer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!customer) {
    //Change this to use Routers error page??
    return <div className="no-data">No customer data available</div>;
  }

  const { email, address, suburb, state, postcode } = customer ?? {};
  const combinedAddress = `${address}, ${suburb}, ${state}, ${postcode}`;

  return (
    <div className="mx-5 mb-4 space-y-5">
      <div className="rounded border border-base-300 p-4">
        <ContactDetails email={email} />
        <div className="w-9/10 divider mx-auto" />
        <AddressDetails address={combinedAddress} />
        <div className="w-9/10 divider mx-auto" />
        <ShippingMethodDetails />
      </div>
      <h2 className="text-center text-h2">Payment</h2>
      <div className="border border-base-300 ">
        <CardOptions />
        <div className="bg-base-200">
          <PaymentDetails />
        </div>
      </div>
    </div>
  );
};
