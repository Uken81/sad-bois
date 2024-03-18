import { useLoaderData } from 'react-router';
import { UnavailableShow } from '../Unavalable show';
import { TourType } from '../../../RouteWrappers/TourWrapper';

export const TicketQuantity: React.FC = () => {
  const show = useLoaderData() as TourType;
  const { date, location, venue, ticketStatus } = show;
  console.log('show', show);

  if (['pending', 'postponed', 'sold-out'].includes(ticketStatus)) {
    console.log('test');
    return <UnavailableShow status={ticketStatus} />;
  }

  return (
    <main>
      <p>test</p>
    </main>
  );
};
