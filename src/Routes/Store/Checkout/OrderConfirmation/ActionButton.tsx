import { useNavigate } from 'react-router';
import { useIsLoggedIn } from '../../../../Hooks/useIsLoggedIn';

export const ActionButton: React.FC = () => {
  const isLoggedIn = useIsLoggedIn();
  const navigate = useNavigate();

  return (
    <>
      {!isLoggedIn ? (
        <div className="my-2">
          <h3 className="text-h3">Save your information for next time?</h3>
          <button className="btn btn-accent mt-2" onClick={() => navigate('/register')}>
            Create Account
          </button>
        </div>
      ) : (
        <div className="my-2">
          <h3 className="text-h3">View orders in profile page?</h3>
          <button className="btn btn-accent mt-2" onClick={() => navigate('/profile')}>
            View Orders
          </button>
        </div>
      )}
    </>
  );
};
