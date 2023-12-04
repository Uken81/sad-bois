import { useParams } from 'react-router';

export const OrderConfirmation: React.FC = () => {
  const orderSummary = useParams();
  console.log('orderD', orderSummary);
  return (
    <div>
      <h1>Order Confirmation</h1>
    </div>
  );
};
