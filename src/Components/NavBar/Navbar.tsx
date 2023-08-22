import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <div>
      <Link to="/">Sad Bois</Link>
      <Link to="/test">The Band</Link>
      <Link to="/merchandise">Swag</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};
