import { useLoaderData, useOutletContext } from 'react-router';
import { UserContextType } from '../RouteWrappers/rootWrapper';
import { Orders } from './Orders';
export interface OrderType {
  customerEmail: string;
  shippingDetails: string;
  orderedProducts: string;
  dateOrdered: Date;
  trackingId: string;
  shippingType: string;
  totalCost: string;
}

export const ProfilePage: React.FC = () => {
  const userOrders = useLoaderData() as OrderType[];
  const hasOrders = userOrders.length > 0;
  console.log('userOrders', userOrders);
  // const { id, img, title, subtitle, price, category } = loaderData;
  const { userDetails } = useOutletContext() as UserContextType;
  console.log('userDeets', userDetails);
  return (
    <main>
      <h1>Profile Page</h1>
      <h2>Orders</h2>
      <Orders hasOrders={hasOrders} userOrders={userOrders} />
    </main>
  );
};
