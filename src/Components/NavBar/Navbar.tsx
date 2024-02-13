import { CartType, UserContextType } from '../../Routes/RouteWrappers/RootWrapper';
import { ReactNode, useState } from 'react';
import { MenuItems } from './MenuItems';
import { SideDrawer } from './SideDrawer';
import { Menu } from './Menu';
import { Modal } from '../Modal';

export const Navbar: React.FC<{
  userDetailsContext: UserContextType;
  cart: CartType | null;
  children: ReactNode;
}> = ({ userDetailsContext, cart, children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="drawer">
      <Modal id="logout" isOpen={showModal} setShowModal={setShowModal}>
        <div className="text-center">
          <p className="text-lg font-bold">Network Error</p>
          <p className="font-bold">Failed to successfully log out.</p>
        </div>
      </Modal>
      <input
        id="nav-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={toggleDrawer}
      />
      <div className="drawer-content flex flex-col">
        <Menu cart={cart}>
          <MenuItems userDetailsContext={userDetailsContext} setShowModal={setShowModal} />
        </Menu>
        {children}
      </div>
      <SideDrawer>
        <MenuItems
          icons
          userDetailsContext={userDetailsContext}
          toggleDrawer={toggleDrawer}
          setShowModal={setShowModal}
        />
        <div className="divider" />
        {/* <div className="p-10">
          <img src="../public/Assets/logo1.png" />
        </div> */}
      </SideDrawer>
    </div>
  );
};
