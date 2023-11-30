import { Outlet } from 'react-router';
import { Navbar } from '../../Components/NavBar/Navbar';
import { Dispatch, useState } from 'react';

export interface UserType {
  email: string;
  username: string;
}

export interface UserContextType {
  userDetails: UserType | null;
  setUserDetails: Dispatch<React.SetStateAction<UserType | null>>;
}

export const Root: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserType | null>(null);

  return (
    <>
      <Navbar userDetailsContext={{ userDetails, setUserDetails }} />
      <Outlet context={{ userDetails, setUserDetails }} />
    </>
  );
};
