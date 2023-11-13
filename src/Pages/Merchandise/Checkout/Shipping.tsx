import { useContext, useEffect } from 'react';
import { CustomerContext, CustomerContextType } from '../../../Context/CustomerContext';
import { useNavigate } from 'react-router';
import { currencyFormatter } from '../../../Utils/currencyFormatter';
import { Button } from 'react-bootstrap';

export interface ShippingOptionsType {
  type: string;
  name: string;
  price: number;
}

export const Shipping: React.FC = () => {
  const { customer, setCustomer } = useContext(CustomerContext) as CustomerContextType;
  const navigate = useNavigate();

  useEffect(() => {
    console.log('customeShipping', customer?.selectedShipping);
  }, [customer]);

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

  const shippingOptions: ShippingOptionsType[] = [
    {
      type: 'domestic/standard',
      name: 'standard domestic shipping',
      price: 10.99
    },
    {
      type: 'domestic/express',
      name: 'express domestic shipping',
      price: 15.99
    }
  ];

  const updateCustomerWithShipping = (option: ShippingOptionsType) => {
    const newCustomerData = {
      ...customer,
      selectedShipping: option
    };
    setCustomer(newCustomerData);
  };

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
          const formattedPrice = currencyFormatter.format(option.price);
          return (
            <div
              key={option.type}
              onClick={() => updateCustomerWithShipping(option)}
              style={{ border: 'solid 1px red', marginTop: '10px' }}>
              <p>{option.name}</p>
              <p>{formattedPrice}</p>
            </div>
          );
        })}
      </div>
      <Button onClick={() => navigate('/checkout/payment')}>Continue to Payment</Button>
    </div>
  );
};
