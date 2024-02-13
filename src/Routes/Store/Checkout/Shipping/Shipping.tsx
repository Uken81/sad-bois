import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router';
import { CustomerContextType } from '../../../RouteWrappers/checkoutWrapper';
import { useGetCustomer } from '../../../../Hooks/useGetCustomer';
import { ContactDetails } from '../CustomerDetails/ContactDetails';
import { AddressDetails } from '../CustomerDetails/AdressDetails';
import { ShippingSelection } from './ShippingSelection';

export const Shipping: React.FC = () => {
  const { customer, setCustomer } = useOutletContext() as CustomerContextType;
  const getCustomer = useGetCustomer();
  const navigate = useNavigate();

  useEffect(() => {
    if (!customer) {
      const retrievedCustomer = getCustomer();
      setCustomer(retrievedCustomer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!customer) {
    //Change this to use Routers error page??
    return <div>No customer data available</div>;
  }

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
      <button
        className="btn btn-accent btn-active w-full rounded-sm"
        onClick={() => navigate(`/store/checkout/payment`)}>
        Continue to Payment
      </button>
    </div>
  );
};
