import { ReactNode } from 'react';
import { HamburgerIcon } from './Links/HamburgerIcon';
import { CartLink } from './Links/CartLink';
import { CartType } from '../../Routes/RouteWrappers/rootWrapper';
import { HomeLink } from './Links/HomeLink';

export const Menu: React.FC<{
  children: ReactNode;
  cart: CartType | null;
}> = ({ children, cart }) => {
  return (
    <div className="navbar w-full bg-base-300">
      <div className="mx-2 flex-1 px-2">
        <HomeLink />
      </div>
      <div className="flex-none lg:hidden">
        <HamburgerIcon />
      </div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal text-lg">{children}</ul>
      </div>
      <CartLink cart={cart} />
    </div>
  );
};
