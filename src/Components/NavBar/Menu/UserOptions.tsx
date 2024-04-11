import { useState } from 'react';
import { Logout } from '../Links/Logout';
import { Profile } from '../Links/Profile';
import { UserDropdown } from './UserDropdown';
import { LogoutErrorModal } from './LogoutErrorModal';

export const UserOptions: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <LogoutErrorModal showModal={showModal} setShowModal={setShowModal} />
      <div className="mb-2 border-l-2 border-secondary pl-1 duration-500 hover:border-accent lg:hidden">
        <Profile />
      </div>
      <div className="border-l-2 border-secondary pl-1 duration-500 hover:border-accent lg:hidden">
        <Logout setShowModal={setShowModal} />
      </div>
      <div className="hidden border-l-2 border-secondary pl-1 duration-500 hover:border-accent lg:block">
        <UserDropdown setShowModal={setShowModal} />
      </div>
    </>
  );
};
