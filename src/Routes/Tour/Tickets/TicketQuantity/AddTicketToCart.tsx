import { useLoaderData } from 'react-router';
import { UnavailableShow } from '../UnavailableShow';
import { TourType } from '../../../RouteWrappers/TourWrapper';
import { useAddStoreItem } from '../../../../Hooks/useAddStoreItem';
import { Quantity } from '../../../Store/Cart/AddToCart/Quantity';
import { useState } from 'react';

export const AddTicketToCart: React.FC = () => {
  const show = useLoaderData() as TourType;
  const { venue, ticketStatus } = show;
  const [quantity, setQuantity] = useState(1);
  console.log('show', show);
  const addTicket = useAddStoreItem();

  if (['pending', 'postponed', 'sold-out'].includes(ticketStatus)) {
    console.log('test');
    return <UnavailableShow status={ticketStatus} />;
  }

  const handleAddTicket = () => {
    addTicket(show, quantity);
  };

  return (
    <main>
      <p>{venue} |</p>
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      <button onClick={handleAddTicket}>Add</button>
    </main>
  );
};
