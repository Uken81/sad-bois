import { useLoaderData } from 'react-router';
import { Orders } from './Orders';
import { OrderType } from '../../DataLoaders/ordersLoader';
import { useStore } from '../../Store/useStore';

export const ProfilePage: React.FC = () => {
  const userOrders = useLoaderData() as OrderType[] | null;
  const email = useStore((state) => state.userState.user?.email);
  const username = useStore((state) => state.userState.user?.username);

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
