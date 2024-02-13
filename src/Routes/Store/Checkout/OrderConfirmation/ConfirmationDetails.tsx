export const ConfirmationDetails: React.FC<{
  orderId: string | undefined;
  email: string | undefined;
}> = ({ orderId, email }) => {
  const idInfo = orderId ?? (
    <span className="font-bold text-red-500">
      Could not find order id, please check your email for order confirmation or contact support.
    </span>
  );
  const emailInfo = email ?? (
    <span className="font-bold text-red-500">
      Could not find email, please check your email for order confirmation or contact support.
    </span>
  );

  return (
    <div>
      <p className="mt-2 font-bold">Your order number is </p>
      <p>{idInfo}</p>
      <p className="mt-2 font-bold">You will recieve an email shortly at </p>
      <p>{emailInfo}</p>
    </div>
  );
};
