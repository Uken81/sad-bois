import { Dispatch, SetStateAction } from 'react';
import { Modal } from '../../../../../Components/Modal';

export const TermsModal: React.FC<{
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}> = ({ showModal, setShowModal }) => {
  return (
    <Modal id="terms-agreement" isOpen={showModal} setShowModal={setShowModal}>
      <div className="text-center">
        <p className="text-lg font-bold">Error Adding Items</p>
        <p className="text-secondary">You must agree to the terms and conditions.</p>
      </div>
    </Modal>
  );
};
