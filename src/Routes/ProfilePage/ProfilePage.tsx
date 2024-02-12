import { useLoaderData, useOutletContext } from 'react-router';
import { Orders } from './Orders';
import { OrderType } from '../../DataLoaders/ordersLoader';
import { UserContextType, UserType } from '../RouteWrappers/rootWrapper';

export const ProfilePage: React.FC = () => {
  const userOrders = useLoaderData() as OrderType[] | null;
  const { userDetails } = useOutletContext() as UserContextType;
  const { email, username } = userDetails as UserType;

  return (
    <main>
      <div className="bg-accent p-4">
        <h1 className="text-h1 font-h1">{username}</h1>
        <h3 className="text-h3 font-h3">{email}</h3>
      </div>
      <Orders userOrders={userOrders} />
    </main>
  );
};
