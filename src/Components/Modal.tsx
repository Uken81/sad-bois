import { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';

export const Modal: React.FC<{
  id: string;
  isOpen: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}> = ({ id, isOpen, setShowModal, children }) => {
  useEffect(() => {
    const modal = document.getElementById(id) as HTMLDialogElement | null;

    if (!modal) {
      console.error('Modal element is null or undefined.');
      return;
    }

    if (isOpen) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [id, isOpen]);

  return (
    <div className="modal">
      <dialog id={id} className="modal">
        <div className="modal-box border text-primary">
          <form method="dialog">
            <button
              className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
              onClick={() => setShowModal(false)}>
              ✕
            </button>
          </form>
          {children}
        </div>
      </dialog>
    </div>
  );
};
