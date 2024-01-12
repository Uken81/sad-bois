import { ReactNode } from 'react';

export const SideDrawer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="drawer-side ">
      <label htmlFor="nav-drawer" aria-label="close sidebar" className="drawer-overlay" />
      <ul className="menu min-h-full w-80 space-y-5 bg-base-300 p-4 text-2xl ">{children}</ul>
    </div>
  );
};
