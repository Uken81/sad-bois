import { Dispatch, SetStateAction } from 'react';
import { Modal } from '../../Modal';

export const LogoutErrorModal: React.FC<{ showModal: boolean; setShowModal: Dispatch<SetStateAction<boolean>> }> = ({ showModal, setShowModal }) => {
  return (
    <Modal id="logout" isOpen={showModal} setShowModal={setShowModal}>
      <div className="text-center">
        <p className="text-lg font-bold">Network Error</p>
        <p className="font-bold">Failed to successfully log out.</p>
      </div>
    </Modal>
  );
};
