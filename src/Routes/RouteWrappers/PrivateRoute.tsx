import { ReactNode, useEffect, useState } from 'react';
import { validateUser } from '../../Utils/Validation/validateUser';
import { Navigate } from 'react-router';

export const PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isValidated, setIsValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const auth = await validateUser();
      //Todo: display error message to user when auth is false.
      setIsValidated(auth);
    } catch (error) {
      console.error('Error validating user', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  return isValidated ? <>{children}</> : <Navigate to={'/login'} />;
};
