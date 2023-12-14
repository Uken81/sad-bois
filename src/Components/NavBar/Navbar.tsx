import { Link } from 'react-router-dom';
import { CartType, UserContextType } from '../../Routes/RouteWrappers/rootWrapper';
import { useState } from 'react';
import { ErrorMessage, GeneralErrorType } from '../ErrorMessage';
import { CartLink } from './CartLink';
import { MenuItems } from './MenuItems';
import { HamburgerIcon } from './hamburgerIcon';

export const Navbar: React.FC<{
  userDetailsContext: UserContextType;
  cart: CartType | null;
}> = ({ userDetailsContext, cart }) => {
  const [error, setError] = useState<GeneralErrorType | null>(null);
  const isDisplayingError = error !== null;
  return (
    <nav className="navbar bg-base-100 ">
      <div className="navbar-start ">
        <Link to="/" className="text-black no-underline btn btn-ghost text-xl">
          The Sad Bois
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <MenuItems userDetailsContext={userDetailsContext} setError={setError} />
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown md:hidden">
          <HamburgerIcon />
          <div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content right-0 z-[1] p-2 shadow bg-base-100 rounded-box w-64 menu-vertical">
              <MenuItems userDetailsContext={userDetailsContext} setError={setError} />
            </ul>
          </div>
        </div>
        <CartLink cart={cart} />
      </div>
      <ErrorMessage
        display={isDisplayingError}
        variant="danger"
        message={error?.message ?? null}
        setError={setError}
      />
    </nav>
  );
};
