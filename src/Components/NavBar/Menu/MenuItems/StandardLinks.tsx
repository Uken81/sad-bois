import { TiNews } from 'react-icons/ti';
import { LinkItemType } from '../../../../Types/types';
import { PiShoppingCartBold } from 'react-icons/pi';
import { LiaMusicSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

export const StandardLinks: React.FC<{ icons?: boolean; toggleDrawer?: () => void }> = ({ icons, toggleDrawer }) => {
  const standardLinks: LinkItemType[] = [
    { destination: 'news', text: 'News', icon: <TiNews /> },
    { destination: 'store/all', text: 'Swag', icon: <PiShoppingCartBold /> },
    { destination: 'tour', text: 'Tour', icon: <LiaMusicSolid /> }
  ];

  return standardLinks.map((link) => {
    const { destination, text, icon } = link;
    return (
      <div key={destination} className="flex flex-row items-center border-l-2 border-secondary duration-500 hover:border-accent">
        <div className="ml-1 text-secondary">{icons ? icon : null}</div>
        <li className="font-bold text-primary" onClick={toggleDrawer}>
          <Link to={`/${destination}`}>{text}</Link>
        </li>
      </div>
    );
  });
};
