import { capitaliseWords } from '../../../../Utils/Formatters/capitaliseWords';
import { formatCurrency } from '../../../../Utils/Formatters/currencyFormatter';
import { useBoundStore } from '../../../../Stores/useStore';

export const ShippingMethodDetails: React.FC = () => {
  const selectedShipping = useBoundStore((state) => state.selectedShipping);
  const formattedShippingName = capitaliseWords(selectedShipping.name);
  const formattedShippingPrice = formatCurrency(selectedShipping.shippingPrice);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <p className="font-bold">Shipping method</p>
        <p>{formattedShippingName}</p>
      </div>
      <p className="ml-auto self-end font-bold">{formattedShippingPrice}</p>
    </div>
  );
};
