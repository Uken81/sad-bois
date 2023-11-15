import { useContext, useEffect } from 'react';
import { CustomerContext, CustomerContextType } from '../../../Context/CustomerContext';
import { useNavigate, useOutletContext } from 'react-router';
import { Button } from 'react-bootstrap';
import { shippingOptions } from './shippingOptions';
import { CheckoutContextType } from '../../../App';
import { formatCurrency } from '../../../Utils/currencyFormatter';
import { useRepopulateCustomer } from '../../../Hooks/useRepopulateCustomer';

export const Shipping = () => {
  const { customer } = useContext(CustomerContext) as CustomerContextType;
  const { selectedShipping, setSelectedShipping } = useOutletContext() as CheckoutContextType;
  const refreshCustomer = useRepopulateCustomer();
  console.log('ship', selectedShipping);
  const navigate = useNavigate();
  useEffect(() => {
    if (!customer) {
      refreshCustomer();
    }
  }, []);

  if (!customer) {
    //Change this to use Routers error page??
    return <div className="no-data">No customer data available</div>;
  }

  const { email, address, suburb, state, postcode } = customer;
  const combinedAddress = `${address}, ${suburb}, ${state}, ${postcode}`;

  const changeDetails = (
    <p className="change-details" onClick={() => navigate('/checkout/details')}>
      Change
    </p>
  );

  return (
    <div>
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
      <div className="shipping-options" style={{ border: 'solid 2px black', marginTop: '50px' }}>
        {shippingOptions.map((option) => {
          const formattedPrice = formatCurrency(option.price);
          return (
            <div
              key={option.type}
              onClick={() => setSelectedShipping(option)}
              style={{ border: 'solid 1px red', marginTop: '10px' }}>
              <p>{option.name}</p>
              <p>{formattedPrice}</p>
            </div>
          );
        })}
      </div>
      <Button onClick={() => navigate(`/checkout/payment/${selectedShipping}`)}>
        Continue to Payment
      </Button>
    </div>
  );
};
