import { useState } from 'react';
import { Logout } from '../Links/Logout';
import { Profile } from '../Links/Profile';
import { UserDropdown } from './UserDropdown';
import { Modal } from '../../Modal';

export const UserOptions: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal id="logout" isOpen={showModal} setShowModal={setShowModal}>
        <div className="text-center">
          <p className="text-lg font-bold">Network Error</p>
          <p className="font-bold">Failed to successfully log out.</p>
        </div>
      </Modal>
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
