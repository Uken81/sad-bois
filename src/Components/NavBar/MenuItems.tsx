import { Link } from 'react-router-dom';
import { UserContextType } from '../../Routes/RouteWrappers/rootWrapper';
import { Logout } from '../Logout/Logout';
import { Dispatch } from 'react';
import { GeneralErrorType } from '../ErrorMessage';

export const MenuItems: React.FC<{
  userDetailsContext: UserContextType;
  setError: Dispatch<React.SetStateAction<GeneralErrorType | null>>;
}> = ({ userDetailsContext, setError }) => {
  const { userDetails } = userDetailsContext;

  return (
    <>
      <li>
        <Link to="/news" className="text-black no-underline">
          News
        </Link>
      </li>
      <li>
        <Link to="/tour" className="text-black no-underline">
          Tour
        </Link>
      </li>
      <li>
        <Link to="/store" className="text-black no-underline">
          Swag
        </Link>
      </li>
      <li>
        <Link to={`profile/${userDetails?.email}`} className="text-black no-underline">
          PP
        </Link>
      </li>
      <li>
        {userDetails ? (
          <Logout userDetailsContext={userDetailsContext} setError={setError} />
        ) : (
          <Link to="/login" className="text-black no-underline">
            Log In
          </Link>
        )}
      </li>
    </>
  );
};
