import { useContext } from 'react';
import { CustomerContext, CustomerContextType } from '../../../Context/CustomerContext';
import { useNavigate, useParams } from 'react-router';

export const Payment: React.FC = () => {
  const { customer } = useContext(CustomerContext) as CustomerContextType;
  const navigate = useNavigate();

  const { email, address, suburb, state, postcode } = customer;
  const combinedAddress = `${address}, ${suburb}, ${state}, ${postcode}`;

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
          <p>{email}</p>
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
