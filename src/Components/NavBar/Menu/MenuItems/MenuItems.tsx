import { Login } from '../../Links/Login';
import { HomeLink } from '../../Links/HomeLink';
import { useIsLoggedIn } from '../../../../Hooks/useIsLoggedIn';
import { UserOptions } from '../UserOptions';
import { StandardLinks } from './StandardLinks';

export const MenuItems: React.FC<{
  toggleDrawer?: () => void;
  icons?: boolean;
}> = ({ toggleDrawer, icons }) => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <>
      <div onClick={toggleDrawer} className="text-center lg:hidden">
        <HomeLink />
      </div>
      <div className="divider" />
      <StandardLinks icons={icons} toggleDrawer={toggleDrawer} />
      <div onClick={toggleDrawer}>
        {isLoggedIn ? (
          <UserOptions />
        ) : (
          <div className="border-l-2 border-secondary pl-1 duration-500 hover:border-accent">
            <Login icons={icons} />
          </div>
        )}
      </div>
    </>
  );
};
