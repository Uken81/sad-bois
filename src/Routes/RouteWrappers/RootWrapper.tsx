import { Outlet } from 'react-router';
import { Navbar } from '../../Components/NavBar/Navbar';
import { ScrollRestoration } from 'react-router-dom';
import { Footer } from '../../Components/Footer';

export const RootWrapper: React.FC = () => {
  return (
    <Navbar>
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </Navbar>
  );
};
