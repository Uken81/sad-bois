export type GeneralErrorType = {
  message: string;
};

export type DataError = {
  message: string;
  details?: string;
  fatalError?: boolean;
};

export type FormErrorType = GeneralErrorType & {
  type?: 'email' | 'existing_email' | 'password' | 'network' | 'cardNumber' | 'nameOnCard' | 'cardExpiration' | 'cardSecurityCode';
};
