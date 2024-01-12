import { format } from 'date-fns';
import { OrderType } from './ordersLoader';

export const Orders: React.FC<{ userOrders: OrderType[] | null }> = ({ userOrders }) => {
  if (!userOrders) {
    return (
      <div>
        <h3>
          You have not made any orders, visit the store to get your hands on some awesome swag!
        </h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 bg-secondary p-4">
      <h1 className="text-h1">Orders</h1>
      {userOrders.map((order) => {
        const { orderId, dateOrdered, shippingType, totalCost } = order;
        console.log('DATE', dateOrdered);
        const formattedDate = format(new Date(dateOrdered), 'dd/MM/yyyy');

        return (
          <div className="mx-2 space-y-2 border border-primary p-4" key={orderId}>
            <p className="font-bold">
              Date of purchase: <span className="font-normal text-primary">{formattedDate}</span>
            </p>
            <p className="font-bold">
              Shipping: <span className="font-normal text-primary">{shippingType}</span>
            </p>

            <p className="font-bold">
              Total cost: <span className="font-normal text-primary">${totalCost}</span>
            </p>
            <p className="font-bold">
              Order ID: <span className="font-normal text-primary">{orderId}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};
