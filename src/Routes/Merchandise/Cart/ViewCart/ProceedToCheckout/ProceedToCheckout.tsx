import { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router';
import { TermsCheckout } from './TermsCheckbox';

export const ProceedToCheckout: React.FC<{ setShowModal: Dispatch<SetStateAction<boolean>> }> = ({
  setShowModal
}) => {
  const [hasAgreed, setHasAgreed] = useState(false);
  const navigate = useNavigate();

  const proceedToCheckout = () => {
    if (!hasAgreed) {
      setShowModal(true);
      return;
    }

    navigate('/store/checkout/details');
  };

  return (
    <>
      <TermsCheckout hasAgreed={hasAgreed} setHasAgreed={setHasAgreed} />
      <button className="btn btn-secondary mb-4" onClick={proceedToCheckout}>
        CHECKOUT
      </button>
    </>
  );
};
