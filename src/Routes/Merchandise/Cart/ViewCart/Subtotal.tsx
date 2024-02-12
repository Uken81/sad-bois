import { formatCurrency } from '../../../../Utils/currencyFormatter';

export const Subtotal: React.FC<{ subtotal: number | null | undefined }> = ({ subtotal }) => {
  const formattedSubtotal = subtotal ? formatCurrency(subtotal) : null;

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
