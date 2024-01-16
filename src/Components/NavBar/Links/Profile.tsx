import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export const Profile: React.FC<{ email: string }> = ({ email }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="mr- text-secondary lg:hidden">
        <CgProfile />
      </div>
      {/* <p className="font-bold text-primary">Logout</p> */}
      <li className="font-bold text-primary">
        <Link to={`/profile/${email}`}>Profile</Link>
      </li>
    </div>
  );
};
