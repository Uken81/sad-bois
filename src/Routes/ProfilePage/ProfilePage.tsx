import { useLoaderData } from 'react-router';
import { Orders } from './Orders';
import { OrderType } from './ordersLoader';

export const ProfilePage: React.FC = () => {
  const userOrders = useLoaderData() as OrderType[] | null;
  console.log('userOrders', userOrders);
  // const { userDetails } = useOutletContext() as UserContextType;

  return (
    <main>
      <h1>Profile Page</h1>
      <h2>Orders</h2>
      <Orders userOrders={userOrders} />
    </main>
  );
};
