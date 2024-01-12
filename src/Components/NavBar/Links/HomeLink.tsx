import { Link } from 'react-router-dom';

export const HomeLink: React.FC = () => {
  return (
    <Link to="/" className="btn btn-ghost text-2xl ">
      The Sad Bois
    </Link>
  );
};