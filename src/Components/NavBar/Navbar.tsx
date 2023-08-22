import { Link } from 'react-router-dom';
import './navbar.scss';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li className="home">
          <Link to="/">Sad Bois</Link>
        </li>
        <li>
          <Link to="/test">The Band</Link>
        </li>
        <li>
          <Link to="/merchandise">Swag</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    </nav>
  );
};
