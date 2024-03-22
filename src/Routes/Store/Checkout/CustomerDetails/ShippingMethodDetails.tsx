import { useOutletContext } from 'react-router';
import { SelectedShippingContextType } from '../../../RouteWrappers/CheckoutWrapper';
import { capitaliseWords } from '../../../../Utils/Formatters/capitaliseWords';
import { formatCurrency } from '../../../../Utils/Formatters/currencyFormatter';

export const ShippingMethodDetails: React.FC = () => {
  const outletContext = useOutletContext();
  const { selectedShipping } = outletContext as SelectedShippingContextType;
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
