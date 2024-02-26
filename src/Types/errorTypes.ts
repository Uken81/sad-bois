import { GeneralErrorType } from '../Components/ErrorMessage';

export interface DataError {
  message: string;
  details?: string;
  fatalError?: boolean;
}

export interface FormErrorType extends GeneralErrorType {
  type?:
    | 'email'
    | 'existing_email'
    | 'password'
    | 'network'
    | 'server'
    | 'cardNumber'
    | 'nameOnCard'
    | 'cardExpiration'
    | 'cardSecurityCode';
}
