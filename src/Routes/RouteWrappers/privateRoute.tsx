import { ReactNode, useEffect, useState } from 'react';
import { validateUser } from '../../Utils/validateUser';
import { Navigate } from 'react-router';

export const PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await validateUser();
      setIsValidated(auth);
    };
    checkAuth();
  }, []);

  return isValidated ? <>{children}</> : <Navigate to={'/login'} />;
};
