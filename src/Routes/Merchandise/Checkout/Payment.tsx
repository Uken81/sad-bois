import { useContext } from 'react';
import { useNavigate, useOutletContext } from 'react-router';
import { useRepopulateCart } from '../../../Hooks/useRepopulateCart';
import { CustomerContextType } from '../../RouteWrappers/checkoutWrapper';

export const Payment: React.FC = () => {
  const { customer } = useOutletContext() as CustomerContextType;
  // console.log('paycust', customer);
  // const refreshCustomer = useRepopulateCart();
  const navigate = useNavigate();

  // const { email, address, suburb, state, postcode } = customer;
  // useEffect(() => {
  //   if (!customer) {
  //     refreshCustomer();
  //   }
  // }, []);
  const combinedAddress = `${address}, ${suburb}, ${state}, ${postcode}`;
  // const combinedAddress = `${customer?.address}, ${customer?.suburb}, ${customer?.state}, ${customer?.postcode}`;

  const changeDetails = (
    <p className="change-details" onClick={() => navigate('/checkout/details')}>
      Change
    </p>
  );

  return (
    <div>
      <h1>PAYMENT PAGE</h1>
      <div className="shipping-details" style={{ border: 'solid 2px black' }}>
        <div style={{ border: 'solid 1px red' }}>
          <p>Contact</p>
          <p>{customer?.email}</p>
          {changeDetails}
        </div>
        <div style={{ border: 'solid 1px red', marginTop: '10px' }}>
          <p>Ship To</p>
          <p>{combinedAddress}</p>
          {changeDetails}
        </div>
      </div>
      <div className="payment-detail" style={{ marginTop: '20px' }}>
        <h3>Payment</h3>
      </div>
    </div>
  );
};
