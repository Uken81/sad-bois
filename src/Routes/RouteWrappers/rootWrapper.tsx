import { Outlet } from 'react-router';
import { Navbar } from '../../Components/NavBar/Navbar';

export const Root: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
