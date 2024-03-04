import { useNavigate, useOutletContext } from 'react-router';
import { UserContextType } from '../../../RouteWrappers/rootWrapper';

export const ActionButton: React.FC = () => {
  const { userDetails } = useOutletContext() as UserContextType;
  const navigate = useNavigate();

  return (
    <>
      {!userDetails ? (
        <div className="my-2">
          <h3 className="text-h3">Save your information for next time?</h3>
          <button className="btn btn-accent mt-2" onClick={() => navigate('/register')}>
            Create Account
          </button>
        </div>
      ) : (
        <div className="my-2">
          <h3 className="text-h3">View orders in profile page?</h3>
          <button
            className="btn btn-accent mt-2"
            onClick={() => navigate(`/profile/${userDetails.email}`)}>
            View Orders
          </button>
        </div>
      )}
    </>
  );
};
