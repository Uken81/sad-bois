import { Outlet, useOutletContext } from 'react-router';
import { CartContextType } from './RootWrapper';

export interface TourType {
  id: string;
  date: Date;
  location: string;
  venue: string;
  ticketStatus: 'pending' | 'on sale' | 'postponed' | 'sold-out';
}

export const TourWrapper: React.FC = () => {
  const { cart, setCart } = useOutletContext() as CartContextType;

  return <Outlet context={{ cart, setCart }} />;
};
