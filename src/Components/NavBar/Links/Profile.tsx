import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export const Profile: React.FC = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="mr- text-secondary lg:hidden">
        <CgProfile />
      </div>
      <li className="font-bold text-primary">
        <Link to={'/profile'}>Profile</Link>
      </li>
    </div>
  );
};
