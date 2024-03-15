import { Outlet } from 'react-router';

export interface TourType {
  id: string;
  date: Date;
  location: string;
  venue: string;
  ticketStatus: 'pending' | 'on sale' | 'postponed' | 'sold-out';
}

export const TourWrapper: React.FC = () => {
  return <Outlet />;
};
