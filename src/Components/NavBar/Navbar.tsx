import { ReactNode, useState } from 'react';
import { MenuItems } from './Menu/MenuItems/MenuItems';
import { SideDrawer } from './SideDrawer';
import { Menu } from './Menu/Menu';

export const Navbar: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="drawer">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" checked={isDrawerOpen} onChange={toggleDrawer} />
      <div className="drawer-content flex min-h-screen flex-col">
        <Menu>
          <MenuItems />
        </Menu>
        {children}
      </div>
      <SideDrawer>
        <MenuItems icons toggleDrawer={toggleDrawer} />
        <div className="divider" />
      </SideDrawer>
    </div>
  );
};
