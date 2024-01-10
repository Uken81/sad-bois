import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router';
import {
  CustomerContextType,
  SelectedShippingContextType
} from '../../../RouteWrappers/checkoutWrapper';
import { useGetCustomer } from '../../../../Hooks/useGetCustomer';
import { ContactDetails } from './ContactDetails';
import { AddressDetails } from './AdressDetails';
import { ShippingSelection } from './ShippingSelection';

export const Shipping: React.FC = () => {
  const { customer, setCustomer } = useOutletContext() as CustomerContextType;
  const { selectedShipping } = useOutletContext() as SelectedShippingContextType;
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
    return <div className="no-data">No customer data available</div>;
  }

  const { email, address, suburb, state, postcode } = customer;
  const combinedAddress = `${address}, ${suburb}, ${state}, ${postcode}`;

  return (
    <div className="mx-5">
      <div className=" rounded border border-neutral-200 p-4">
        <ContactDetails email={email} />
        <div className="w-9/10 divider mx-auto" />
        <AddressDetails address={combinedAddress} />
      </div>
      <div className="my-5 rounded border border-neutral-200 p-4">
        <ShippingSelection />
      </div>
      <button
        className="btn btn-accent btn-active w-full rounded-sm"
        onClick={() => navigate(`/store/checkout/payment/${selectedShipping.name}`)}>
        Continue to Payment
      </button>
    </div>
  );
};
