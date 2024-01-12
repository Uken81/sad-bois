import { Dispatch, SetStateAction } from 'react';
import { capitaliseWords } from '../Utils/capitaliseWords';

export interface GeneralErrorType {
  message: string;
}

export interface FormErrorType extends GeneralErrorType {
  type?:
    | 'email'
    | 'duplicateEmail'
    | 'password'
    | 'network'
    | 'cardNumber'
    | 'nameOnCard'
    | 'cardExpiration'
    | 'cardSecurityCode';
}

type VariantType = 'error' | 'warning';

export const ErrorMessage: React.FC<{
  display: boolean;
  variant: VariantType;
  message: string | null;
  setError: Dispatch<SetStateAction<FormErrorType | GeneralErrorType | null>>;
}> = ({ display, variant, message, setError }) => {
  const capitalisedMessage = message ? capitaliseWords(message) : null;

  if (!display) {
    return null;
  }

  return (
    <div role="alert" className={`alert alert-${variant} max-w-lg`} onClick={() => setError(null)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-auto h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div>
        <h3 className="font-bold">Please refresh page or try again later</h3>
        <div className="text-xs">{capitalisedMessage}</div>
      </div>
    </div>
  );
};
