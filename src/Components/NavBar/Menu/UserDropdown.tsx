import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { Logout } from '../Links/Logout';
import { Dispatch, SetStateAction } from 'react';
import { useBoundStore } from '../../../Stores/boundStore';

export const UserDropdown: React.FC<{
  setShowModal: Dispatch<SetStateAction<boolean>>;
}> = ({ setShowModal }) => {
  const user = useBoundStore((state) => state.user);
  return (
    <div className="dropdown dropdown-end dropdown-bottom">
      <div tabIndex={0} role="button" className="btn m-1 border-none bg-base-300 shadow-none">
        <div className=" sm:hidden lg:block">
          <CgProfile size="2rem" />
        </div>
      </div>
      <ul tabIndex={0} className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 text-lg shadow">
        <li className="font-bold text-primary">
          <Link to={`/profile/${user?.email}`}>Profile</Link>
        </li>
        <li>
          <Logout setShowModal={setShowModal} />
        </li>
      </ul>
    </div>
  );
};
