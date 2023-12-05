import { useNavigate, useOutletContext, useParams } from 'react-router';
import { FaCheckCircle } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { UserContextType } from '../../../RouteWrappers/rootWrapper';

export const OrderConfirmation: React.FC = () => {
  const { userDetails } = useOutletContext() as UserContextType;
  console.log('user', userDetails);
  const { email, trackingId } = useParams();
  const navigate = useNavigate();

  return (
    <main>
      <div className="confirmation-details">
        <FaCheckCircle />
        <h1>Order Confirmed</h1>
        <p>Your order number is {trackingId}</p>
        <p>You will recieve an email shortly at {email}</p>
      </div>
      <div className="questions">
        <h3>Questions?</h3>
        <h3>Call 1800 sadbois</h3>
        <a href="mailto:brendanhurd@gmail.com" target="_blank" rel="noopener noreferrer">
          Email us
        </a>
      </div>
      {userDetails ? (
        <div className="account">
          <h2>Save your information for next time?</h2>
          <Button onClick={() => navigate('/register')}>Create Account</Button>
        </div>
      ) : (
        <div>
          <h2>View orders in profile page?</h2>
          <Button onClick={() => navigate('/profile')}>View Orders</Button>
        </div>
      )}
    </main>
  );
};
