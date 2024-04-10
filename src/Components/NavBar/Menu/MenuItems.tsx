import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { TiNews } from 'react-icons/ti';
import { LiaMusicSolid } from 'react-icons/lia';
import { PiShoppingCartBold } from 'react-icons/pi';
import { Login } from '../Links/Login';
import { HomeLink } from '../Links/HomeLink';
import { useIsLoggedIn } from '../../../Hooks/useIsLoggedIn';
import { UserOptions } from './UserOptions';

interface LinkItemType {
  destination: string;
  text: string;
  icon: ReactNode;
}

export const MenuItems: React.FC<{
  toggleDrawer?: () => void;
  icons?: boolean;
}> = ({ toggleDrawer, icons }) => {
  const isLoggedIn = useIsLoggedIn();

  const standardLinks: LinkItemType[] = [
    { destination: 'news', text: 'News', icon: <TiNews /> },
    { destination: 'store/all', text: 'Swag', icon: <PiShoppingCartBold /> },
    { destination: 'tour', text: 'Tour', icon: <LiaMusicSolid /> }
  ];

  return (
    <>
      <div onClick={toggleDrawer} className="text-center lg:hidden">
        <HomeLink />
      </div>
      <div className="divider" />
      {standardLinks.map((link) => {
        const { destination, text, icon } = link;

        return (
          <div key={destination} className="flex flex-row items-center border-l-2 border-secondary duration-500 hover:border-accent">
            <div className="ml-1 text-secondary">{icons ? icon : null}</div>
            <li className="font-bold text-primary" onClick={toggleDrawer}>
              <Link to={`/${destination}`}>{text}</Link>
            </li>
          </div>
        );
      })}
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
