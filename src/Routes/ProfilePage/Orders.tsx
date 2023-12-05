import { format } from 'date-fns';
import { OrderType } from './ProfilePage';

export const Orders: React.FC<{ hasOrders: boolean; userOrders: OrderType[] }> = ({
  hasOrders,
  userOrders
}) => {
  if (!hasOrders) {
    return (
      <div>
        <h3>
          You have not made any orders, visit the store to get youre hands on some awesome swag!
        </h3>
      </div>
    );
  }

  return (
    <div>
      <h1>Orders</h1>
      {userOrders.map((order) => {
        const { dateOrdered, shippingType, totalCost } = order;
        console.log('DATE', dateOrdered);
        const formattedDate = format(new Date(dateOrdered), 'dd/MM/yyyy');

        return (
          <div className="order">
            <p>Date of purchase: {formattedDate}</p>
            <p>Shipping: {shippingType}</p>
            <p>Total cost: {totalCost}</p>
            <p></p>
          </div>
        );
      })}
    </div>
  );
};
