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
      const response = await fetch(
        'https://sad-bois-backend-637e57975bd5.herokuapp.com/auth/logout',
        requestOptions
      );

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
    <div className="mt-2 flex flex-row items-center hover:cursor-pointer" onClick={handleClick}>
      <div className="mr-4 text-secondary lg:hidden">
        <RiLogoutCircleFill />
      </div>
      <span className="py-2 font-bold text-primary">Logout</span>
    </div>
  );
};
