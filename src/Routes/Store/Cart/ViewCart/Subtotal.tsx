import { useStore } from '../../../../Stores/useStore';
import { formatCurrency } from '../../../../Utils/Formatters/currencyFormatter';

export const Subtotal: React.FC = () => {
  const cart = useStore((state) => state.cartState.cart);
  const formattedSubtotal = cart?.subtotal ? formatCurrency(cart?.subtotal) : null;

  return (
    <>
      {formattedSubtotal ? (
        <p className="text-lg font-bold">Subtotal {formattedSubtotal}</p>
      ) : (
        <p className="text-lg font-bold text-red-500">Error calculating subtotal</p>
      )}
    </>
  );
};
