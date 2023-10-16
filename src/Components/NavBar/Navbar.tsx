import { Link } from 'react-router-dom';
import './navbar.scss';
import { useContext } from 'react';
import { UserContext } from '../../context';
import { Logout } from '../Logout/Logout';

export const Navbar: React.FC = () => {
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  console.log('conUser', user?.username);

  return (
    <nav>
      <ul>
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
          <Link to="/merchandise">Swag</Link>
        </li>
        <li>
          <Link to="/profile">PP</Link>
        </li>
        <li>{user ? <Logout username={user?.username} /> : <Link to="/login">Log In</Link>}</li>
      </ul>
    </nav>
  );
};
