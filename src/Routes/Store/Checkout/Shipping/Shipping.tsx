import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router';
import { CustomerContextType } from '../../../RouteWrappers/CheckoutWrapper';
import { ContactDetails } from '../CustomerDetails/ContactDetails';
import { AddressDetails } from '../CustomerDetails/AdressDetails';
import { ShippingSelection } from './ShippingSelection';
import { useGetSessionCustomer } from '../../../../Hooks/useGetCustomer';

export const Shipping: React.FC = () => {
  const { customer, setCustomer } = useOutletContext() as CustomerContextType;
  const getSessionCustomer = useGetSessionCustomer();
  const navigate = useNavigate();

  useEffect(() => {
    if (!customer) {
      const retrievedCustomer = getSessionCustomer();
      setCustomer(retrievedCustomer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!customer) {
    return <div>No customer data available</div>;
  }

  const handleSubmit = () => {
    navigate(`/store/checkout/payment`);
  };

  const { email, address, suburb, state, postcode } = customer;
  const combinedAddress = `${address}, ${suburb}, ${state}, ${postcode}`;

  return (
    <div className="mx-5 xl:mx-24">
      <div className="rounded border border-neutral-200 p-4">
        <ContactDetails email={email} />
        <div className="w-9/10 divider mx-auto" />
        <AddressDetails address={combinedAddress} />
      </div>
      <div className="my-5 rounded border border-neutral-200 p-4">
        <ShippingSelection />
      </div>
      <button className="btn btn-accent btn-active w-full rounded-sm" onClick={handleSubmit}>
        Continue to Payment
      </button>
    </div>
  );
};
