import { useOutletContext } from 'react-router';
import { formatCurrency } from '../../../../Utils/Formatters/currencyFormatter';
import { shippingOptions } from './shippingOptions';
import { SelectedShippingContextType } from '../../../RouteWrappers/CheckoutWrapper';
import { capitaliseWords } from '../../../../Utils/Formatters/capitaliseWords';

export const ShippingSelection: React.FC = () => {
  const { selectedShipping, setSelectedShipping } =
    useOutletContext() as SelectedShippingContextType;
  return (
    <div className="flex flex-col">
      {shippingOptions.map((option) => {
        const formattedPrice = formatCurrency(option.shippingPrice);
        const formattedName = capitaliseWords(option.name);
        const isChecked = option.type === selectedShipping.type;

        return (
          <div key={option.type} className="my-5 flex justify-between">
            <div className="flex flex-row">
              <input
                type="radio"
                name="radio-1"
                className="radio"
                checked={isChecked}
                onChange={() => setSelectedShipping(option)}
              />
              <p className="ml-2">{formattedName}</p>
            </div>
            <p className="font-bold">{formattedPrice}</p>
          </div>
        );
      })}
    </div>
  );
};
