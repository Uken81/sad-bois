import { useState } from 'react';
import { useNavigate } from 'react-router';
import { TermsCheckout } from './TermsCheckbox';
import { TermsModal } from '../TermsModal';

export const ProceedToCheckout: React.FC = () => {
  const [hasAgreed, setHasAgreed] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
      <TermsModal showModal={showModal} setShowModal={setShowModal} />
      <TermsCheckout hasAgreed={hasAgreed} setHasAgreed={setHasAgreed} />
      <button className="btn btn-secondary mb-4" onClick={proceedToCheckout}>
        CHECKOUT
      </button>
    </>
  );
};
