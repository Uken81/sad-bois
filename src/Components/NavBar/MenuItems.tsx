import { Link } from 'react-router-dom';
import { UserContextType } from '../../Routes/RouteWrappers/rootWrapper';
import { Logout } from './Links/Logout';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { TiNews } from 'react-icons/ti';
import { LiaMusicSolid } from 'react-icons/lia';
import { PiShoppingCartBold } from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';
import { Login } from './Links/Login';
import { HomeLink } from './Links/HomeLink';
import { UserOptions } from './UserOptions';

interface LinkItemType {
  destination: string;
  text: string;
  icon: ReactNode;
}

export const MenuItems: React.FC<{
  userDetailsContext: UserContextType;
  toggleDrawer?: () => void;
  icons?: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}> = ({ userDetailsContext, toggleDrawer, icons, setShowModal }) => {
  const { userDetails, setUserDetails } = userDetailsContext;

  const standardLinks: LinkItemType[] = [
    { destination: 'news', text: 'News', icon: <TiNews /> },
    { destination: 'tour', text: 'Tour', icon: <LiaMusicSolid /> },
    { destination: 'store', text: 'Swag', icon: <PiShoppingCartBold /> },
    {
      destination: userDetails ? `profile/${userDetails.email}` : 'login',
      text: 'Profile',
      icon: <CgProfile />
    }
  ];

  return (
    <>
      <div onClick={toggleDrawer} className="text-center lg:hidden">
        <HomeLink />
      </div>
      <div className="divider divider-accent" />
      {standardLinks.map((link) => {
        const { destination, text, icon } = link;

        return (
          <div className="flex flex-row items-center border-l-2 border-accent duration-700 hover:border-primary">
            <div className="ml-2">{icons ? icon : null}</div>
            <li className="font-bold text-primary" onClick={toggleDrawer}>
              <Link to={`/${destination}`}>{text}</Link>
            </li>
          </div>
        );
      })}
      <div className="border-l-2 border-accent pl-2" onClick={toggleDrawer}>
        {userDetails ? (
          <>
            <div className="lg:hidden">
              <Logout setUserDetails={setUserDetails} setShowModal={setShowModal} />
            </div>
            <div className="hidden lg:block">
              <UserOptions userDetailContext={userDetailsContext} setShowModal={setShowModal} />
            </div>
          </>
        ) : (
          <Login icons={icons} />
        )}
      </div>
    </>
  );
};
