import { Link } from 'react-router-dom';
import { Logout } from '../Logout/Logout';
import { UserContextType } from '../../Routes/RouteWrappers/rootWrapper';
import { useState } from 'react';
import { ErrorMessage, GeneralErrorType } from '../ErrorMessage';
import './navbar.scss';

export const Navbar: React.FC<{
  userDetailsContext: UserContextType;
}> = ({ userDetailsContext }) => {
  const { userDetails } = userDetailsContext;
  console.log('navDeets', userDetails?.email);
  const [error, setError] = useState<GeneralErrorType | null>(null);
  const isDisplayingError = error !== null;
  return (
    <nav>
      <ul>
        {/* <li className="home">
          <Link to="/test">test</Link>
        </li> */}
        <li className="home">
          <Link to="/">Sad Bois</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/tour">Tour</Link>
        </li>
        <li>
          <Link to="/store">Swag</Link>
        </li>
        <li>
          <Link to={`profile/${userDetails?.email}`}>PP</Link>
        </li>
        <li>
          {userDetails ? (
            <Logout userDetailsContext={userDetailsContext} setError={setError} />
          ) : (
            <Link to="/login">Log In</Link>
          )}
        </li>
      </ul>
      <ErrorMessage
        display={isDisplayingError}
        variant="danger"
        message={error?.message ?? null}
        setError={setError}
      />
    </nav>
  );
};
