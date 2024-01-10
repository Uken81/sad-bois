import { useParams } from 'react-router';
import { FaCheckCircle } from 'react-icons/fa';
import { ConfirmationDetails } from './ConfirmationDetails';
import { OrderIssues } from './OrderIssues';
import { ActionButton } from './ActionButton';

export const OrderConfirmation: React.FC = () => {
  const { email, orderId } = useParams();

  return (
    <main className="flex flex-col">
      <div className="my-10 self-center">
        <FaCheckCircle size="150" color="green" />
      </div>
      <h1 className="text-center text-h1">Order Confirmed</h1>
      <div className="mx-4 border border-base-300 bg-base-200 p-4">
        <ConfirmationDetails orderId={orderId} email={email} />
        <div className="w-9/10 divider mx-auto" />
        <OrderIssues />
      </div>
      <div className="my-2 text-center">
        <ActionButton />
      </div>
    </main>
  );
};
