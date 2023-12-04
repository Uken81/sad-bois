import { useOutletContext } from 'react-router';
import { CustomerContextType } from '../../RouteWrappers/checkoutWrapper';
import { useGetCustomer } from '../../../Hooks/useGetCustomer';
import { ChangeDetails } from './ChangeDetails';
import { PaymentDetails } from './PaymentDetails';
import { useEffect } from 'react';

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

  const { email, address, suburb, state, postcode } = customer ?? {};
  const combinedAddress = `${address}, ${suburb}, ${state}, ${postcode}`;

  return (
    <div>
      <h1>PAYMENT PAGE</h1>
      <div className="shipping-details" style={{ border: 'solid 2px black' }}>
        <div style={{ border: 'solid 1px red' }}>
          <p>Contact</p>
          <p>{email}</p>
          <ChangeDetails />
        </div>
        <div style={{ border: 'solid 1px red', marginTop: '10px' }}>
          <p>Ship To</p>
          <p>{combinedAddress}</p>
          <ChangeDetails />
        </div>
      </div>
      <div className="payment-detail" style={{ marginTop: '20px' }}>
        <h3>Payment</h3>
        <PaymentDetails />
      </div>
    </div>
  );
};
