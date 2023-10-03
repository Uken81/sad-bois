import { HiOutlineLogout } from 'react-icons/hi';
import './logout.scss';
import { useContext } from 'react';
import { UserContext } from '../../context';
import { useNavigate } from 'react-router';

export const Logout: React.FC<{ username: string }> = ({ username }) => {
  const userContext = useContext(UserContext);
  const setUser = userContext?.setUser;
  const navigate = useNavigate();

  const handleClick = () => {
    const requestOptions: RequestInit = {
      method: 'GET',
      credentials: 'include'
    };
    fetch('http://localhost:2001/auth/logout', requestOptions)
      .then((response) => {
        if (!response.ok) {
          console.log('res: ', response);
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (setUser) {
          setUser(null);
        }
        navigate('/');
      });
  };
  return (
    <div className="logout" onClick={handleClick}>
      <p className="username">{username}</p>
      <HiOutlineLogout style={{ marginBottom: 'auto' }} />
    </div>
  );
};
