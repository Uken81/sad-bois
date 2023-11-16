import { ReactNode, useEffect, useState } from 'react';
import { validateUser } from '../../Utils/validateUser';
import { Navigate } from 'react-router';

export const PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isValidated, setIsValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const auth = await validateUser();
        setIsValidated(auth);
      } catch (error) {
        //Todo: display error message to user here
        console.error('Error validating user', error);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    console.log('loading', isLoading);
  });
  if (isLoading) {
    return <div>Loading.....</div>;
  }

  return isValidated ? <>{children}</> : <Navigate to={'/login'} />;
};
