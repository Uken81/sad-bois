import { HiOutlineLogout } from 'react-icons/hi';
import { Dispatch } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContextType } from '../../Routes/RouteWrappers/rootWrapper';
import './logout.scss';
import { GeneralErrorType } from '../ErrorMessage';

export const Logout: React.FC<{
  userDetailsContext: UserContextType;
  setError: Dispatch<React.SetStateAction<GeneralErrorType | null>>;
}> = ({ userDetailsContext, setError }) => {
  const { userDetails, setUserDetails } = userDetailsContext;
  const navigate = useNavigate();

  const handleClick = async () => {
    const requestOptions: RequestInit = {
      method: 'GET',
      credentials: 'include'
    };

    try {
      const response = await fetch('http://localhost:2001/auth/logout', requestOptions);

      if (!response.ok || response === null) {
        throw new Error('Network response was not ok');
      }

      setUserDetails(null);
      navigate('/');
    } catch (error) {
      console.error('Error logging out: ', error);
      setError({ message: 'Failed to logout' });
    }
  };
  return (
    <div className="logout" onClick={handleClick}>
      <Link to={'/profile'}>
        <p className="username">{userDetails?.username}</p>
      </Link>
      <HiOutlineLogout style={{ marginBottom: 'auto' }} />
    </div>
  );
};
