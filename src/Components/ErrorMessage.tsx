import { Dispatch, SetStateAction } from 'react';
import { Alert } from 'react-bootstrap';
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

type VariantType = 'danger' | 'warning';

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
    <Alert
      className="alert text-base w-96"
      variant={variant}
      dismissible
      onClose={() => setError(null)}>
      <Alert.Heading className="alert-heading">{capitalisedMessage}</Alert.Heading>
      <p>Please refresh page or try again later</p>
    </Alert>
  );
};
