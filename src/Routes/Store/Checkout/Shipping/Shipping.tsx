import { useNavigate } from 'react-router';
import { ContactDetails } from '../CustomerDetails/ContactDetails';
import { AddressDetails } from '../CustomerDetails/AdressDetails';
import { ShippingSelection } from './ShippingSelection';
import { useBoundStore } from '../../../../Stores/boundStore';

export const Shipping: React.FC = () => {
  const customer = useBoundStore((state) => state.customer);
  const navigate = useNavigate();

  if (!customer) {
    return <div>No customer data available</div>;
  }

  const handleSubmit = () => {
    navigate(`/store/checkout/payment`);
  };

  return (
    <div className="mx-5 xl:mx-24">
      <div className="rounded border border-neutral-200 p-4">
        <ContactDetails />
        <div className="w-9/10 divider mx-auto" />
        <AddressDetails />
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
