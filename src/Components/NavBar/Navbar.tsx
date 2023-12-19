import { Link } from 'react-router-dom';
import { CartType, UserContextType } from '../../Routes/RouteWrappers/rootWrapper';
import { useState } from 'react';
import { ErrorMessage, GeneralErrorType } from '../ErrorMessage';
import { CartLink } from './CartLink';
import { MenuItems } from './MenuItems';
import { HamburgerIcon } from './HamburgerIcon';

export const Navbar: React.FC<{
  userDetailsContext: UserContextType;
  cart: CartType | null;
}> = ({ userDetailsContext, cart }) => {
  const [error, setError] = useState<GeneralErrorType | null>(null);
  const isDisplayingError = error !== null;
  return (
    <>
      <nav className="navbar border-b-2 ">
        <div className="navbar-start ">
          <Link to="/" className="btn btn-ghost text-xl text-black no-underline">
            The Sad Bois
          </Link>
        </div>
        <div className="navbar-end">
          <div className="hidden md:flex">
            <ul className="menu menu-horizontal px-1">
              <MenuItems userDetailsContext={userDetailsContext} setError={setError} />
            </ul>
          </div>
          <div className="dropdown md:hidden">
            <HamburgerIcon />
            <div>
              <ul
                tabIndex={0}
                className="menu dropdown-content menu-vertical menu-lg right-0 z-[1] w-64 rounded-box bg-base-100 p-2 shadow">
                <MenuItems userDetailsContext={userDetailsContext} setError={setError} />
              </ul>
            </div>
          </div>
        </div>
        <CartLink cart={cart} />
      </nav>
      <div className="flex justify-center">
        <ErrorMessage
          display={isDisplayingError}
          variant="error"
          message={error?.message ?? null}
          setError={setError}
        />
      </div>
    </>
  );
};
