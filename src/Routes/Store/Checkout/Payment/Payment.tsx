import { useOutletContext } from 'react-router';
import { CustomerContextType, CustomerType } from '../../../RouteWrappers/CheckoutWrapper';
import { PaymentDetails } from './PaymentDetails';
import { useEffect } from 'react';
import { ContactDetails } from '../CustomerDetails/ContactDetails';
import { AddressDetails } from '../CustomerDetails/AdressDetails';
import { ShippingMethodDetails } from '../CustomerDetails/ShippingMethodDetails';
import { CardOptions } from './CardOptions/CardOptions';
import { useGetSessionCustomer } from '../../../../Hooks/useGetCustomer';

export const Payment: React.FC = () => {
  const outletContext = useOutletContext();
  const { customer, setCustomer } = outletContext as CustomerContextType;
  const getSessionCustomer = useGetSessionCustomer();

  useEffect(() => {
    if (!customer) {
      const retrievedCustomer: CustomerType = getSessionCustomer();
      setCustomer(retrievedCustomer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!customer) {
    return <div className="no-data">No customer data available</div>;
  }

  const { email, address, suburb, state, postcode } = customer ?? {};
  const combinedAddress = `${address}, ${suburb}, ${state}, ${postcode}`;

  return (
    <div className="mx-5 mb-4 space-y-5">
      <div className="rounded border border-base-300 bg-neutral p-4">
        <ContactDetails email={email} />
        <div className="w-9/10 divider mx-auto" />
        <AddressDetails address={combinedAddress} />
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
