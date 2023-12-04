import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router';
import { Button } from 'react-bootstrap';
import { shippingOptions } from './shippingOptions';
import { formatCurrency } from '../../../Utils/currencyFormatter';
import {
  CustomerContextType,
  SelectedShippingContextType
} from '../../RouteWrappers/checkoutWrapper';
import { ChangeDetails } from './ChangeDetails';
import { useGetCustomer } from '../../../Hooks/useGetCustomer';

export const Shipping: React.FC = () => {
  const { customer, setCustomer } = useOutletContext() as CustomerContextType;
  const { selectedShipping, setSelectedShipping } =
    useOutletContext() as SelectedShippingContextType;
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
    <div>
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
      <div className="shipping-options" style={{ border: 'solid 2px black', marginTop: '50px' }}>
        {shippingOptions.map((option) => {
          const formattedPrice = formatCurrency(option.shippingPrice);
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
      <Button onClick={() => navigate(`/store/checkout/payment/${selectedShipping}`)}>
        Continue to Payment
      </Button>
    </div>
  );
};
