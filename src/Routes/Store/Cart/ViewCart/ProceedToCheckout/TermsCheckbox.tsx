import { Dispatch, SetStateAction } from 'react';

export const TermsCheckout: React.FC<{
  hasAgreed: boolean;
  setHasAgreed: Dispatch<SetStateAction<boolean>>;
}> = ({ hasAgreed, setHasAgreed }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <input
          type="checkbox"
          checked={hasAgreed}
          className="checkbox mx-2"
          onChange={() => setHasAgreed(!hasAgreed)}
        />
        <span className="label-text">
          By making this purchase I agree to the terms and conditions.
        </span>
      </label>
    </div>
  );
};
