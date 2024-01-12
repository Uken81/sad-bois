import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { Logout } from './Links/Logout';
import { UserContextType } from '../../Routes/RouteWrappers/rootWrapper';
import { Dispatch, SetStateAction } from 'react';

export const UserOptions: React.FC<{
  userDetailContext: UserContextType;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}> = ({ userDetailContext, setShowModal }) => {
  const { userDetails, setUserDetails } = userDetailContext;

  return (
    <div className="dropdown dropdown-end dropdown-bottom">
      <div tabIndex={0} role="button" className="btn m-1 border-none bg-base-300 shadow-none">
        <div className="text-accent sm:hidden lg:block">
          <CgProfile size="2rem" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
        <li>
          <Link to={`/profile/${userDetails?.email}`}>Profile</Link>
        </li>
        <li>
          <Logout setUserDetails={setUserDetails} setShowModal={setShowModal} />
        </li>
      </ul>
    </div>
  );
};
