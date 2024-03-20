import { useLoaderData } from 'react-router';
import { UnavailableShow } from '../UnavailableShow';
import { TourType } from '../../../RouteWrappers/TourWrapper';
import { Quantity } from '../../../../Components/AddToCart/Quantity';
import { useState } from 'react';
import { AddToCart, ItemOrderData } from '../../../../Components/AddToCart/AddToCart';
import { format } from 'date-fns';

export const AddTicketToCart: React.FC = () => {
  const show = useLoaderData() as TourType;
  const { location, date, venue, ticketStatus } = show;
  const [quantity, setQuantity] = useState(1);

  if (['pending', 'postponed', 'sold-out'].includes(ticketStatus)) {
    return <UnavailableShow status={ticketStatus} />;
  }

  const itemOrderData: ItemOrderData = {
    item: show,
    quantity
  };

  const formattedDate = format(new Date(date), 'dd/MM/yyyy');

  return (
    <main className="flex flex-col items-center space-y-8 ">
      <div className="mt-8 md:mt-24">
        <h1 className="text-h1 font-h1">The Sad Bois</h1>
        <h2 className="text-h2 font-h2">{venue}</h2>
        <h3 className="text-h3 font-h3">
          {location}, {formattedDate} 7:30pm
        </h3>
      </div>
      <div className="flex w-screen flex-col items-center space-y-2">
        <p>General Admission: $119.99</p>
        <Quantity quantity={quantity} setQuantity={setQuantity} />
        <AddToCart itemOrderData={itemOrderData} />
      </div>
    </main>
  );
};
