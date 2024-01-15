import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router';
import { UserType } from '../../../Routes/RouteWrappers/rootWrapper';
import { RiLogoutCircleFill } from 'react-icons/ri';

export const Logout: React.FC<{
  setUserDetails: Dispatch<SetStateAction<UserType | null>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}> = ({ setUserDetails, setShowModal }) => {
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
      setShowModal(true);
    }
  };

  return (
    <div className="flex flex-row items-center" onClick={handleClick}>
      <div className="mr-4 lg:hidden">
        <RiLogoutCircleFill />
      </div>
      <p className="font-bold text-primary">Logout</p>
    </div>
  );
};
