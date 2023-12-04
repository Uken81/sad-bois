import { useOutletContext } from 'react-router';
import { CustomerContextType } from '../../RouteWrappers/checkoutWrapper';
import { useRepopulateCustomer } from '../../../Hooks/useRepopulateCustomer';
import { ChangeDetails } from './ChangeDetails';
import { PaymentDetails } from './PaymentDetails';
import { CartContextType } from '../../RouteWrappers/storeWrapper';

export const Payment: React.FC = () => {
  const outletContext = useOutletContext();
  const { customer } = outletContext as CustomerContextType;
  console.log('customer', customer);
  // const { customer } = useOutletContext() as CustomerContextType;
  // const { cart, setCart } = useOutletContext() as CartContextType;
  // const { cart } = outletContext as CartContextType;
  // console.log('cart', cart);
  const refreshCustomer = useRepopulateCustomer();

  if (!customer) {
    refreshCustomer();
  }

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
