import { useLoaderData } from 'react-router';
import { UnavailableShow } from '../UnavailableShow';
import { TourType } from '../../../RouteWrappers/TourWrapper';
import { Quantity } from '../../../../Components/AddToCart/Quantity';
import { useState } from 'react';
import { AddButton, ItemOrderData } from '../../../../Components/AddToCart/AddButton';

export const AddTicketToCart: React.FC = () => {
  const show = useLoaderData() as TourType;
  const { venue, ticketStatus } = show;
  const [quantity, setQuantity] = useState(1);
  console.log('show', show);

  if (['pending', 'postponed', 'sold-out'].includes(ticketStatus)) {
    console.log('test');
    return <UnavailableShow status={ticketStatus} />;
  }

  const itemOrderData: ItemOrderData = {
    item: show,
    quantity
  };

  return (
    <main>
      <p>{venue} |</p>
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      <AddButton itemOrderData={itemOrderData} />
    </main>
  );
};
