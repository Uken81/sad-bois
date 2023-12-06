import { format } from 'date-fns';
import { OrderType } from './ordersLoader';

export const Orders: React.FC<{ userOrders: OrderType[] | null }> = ({ userOrders }) => {
  if (!userOrders) {
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
        const { orderId, dateOrdered, shippingType, totalCost } = order;
        console.log('DATE', dateOrdered);
        const formattedDate = format(new Date(dateOrdered), 'dd/MM/yyyy');

        return (
          <div className="order" key={orderId}>
            <p>Order ID: {orderId}</p>
            <p>Date of purchase: {formattedDate}</p>
            <p>Shipping: {shippingType}</p>
            <p>Total cost: {totalCost}</p>
          </div>
        );
      })}
    </div>
  );
};
