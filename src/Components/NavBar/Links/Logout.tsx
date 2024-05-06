import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { serverUrl } from '../../../Server/serverUrl';
import { useStore } from '../../../Stores/useStore';

export const Logout: React.FC<{
  setShowModal: Dispatch<SetStateAction<boolean>>;
}> = ({ setShowModal }) => {
  const resetUser = useStore((state) => state.userState.resetUser);
  const navigate = useNavigate();

  const handleClick = async () => {
    const requestOptions: RequestInit = {
      method: 'GET',
      credentials: 'include'
    };

    try {
      const response = await fetch(`${serverUrl}/auth/logout`, requestOptions);

      if (!response.ok || response === null) {
        throw new Error('Network response was not ok');
      }

      resetUser();
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
