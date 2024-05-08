import { GeneralErrorType } from '../Components/ErrorMessages/ErrorMessage';

export interface DataError {
  message: string;
  details?: string;
  fatalError?: boolean;
}

export interface FormErrorType extends GeneralErrorType {
  type?: 'email' | 'existing_email' | 'password' | 'network' | 'cardNumber' | 'nameOnCard' | 'cardExpiration' | 'cardSecurityCode';
}
