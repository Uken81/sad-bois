import { formatCurrency } from '../../../../../Utils/currencyFormatter';
import { ProductOrder } from '../../AddProductToCart/createProductOrder';

export const PriceDetails: React.FC<{ productOrder: ProductOrder }> = ({ productOrder }) => {
  const { quantity, price, cost } = productOrder;
  const formattedPrice = formatCurrency(price);
  const formattedCost = formatCurrency(cost);

  return (
    <div className="w-1/2 md:w-1/4 lg:px-10 xl:px-14">
      <div className="flex justify-between">
        <span>Price</span>
        <span>{formattedPrice}</span>
      </div>
      <div className="flex justify-between">
        <span>Quantity</span>
        <span>{quantity}</span>
      </div>
      <div className="flex justify-between">
        <span>Cost</span>
        <span>{formattedCost}</span>
      </div>
    </div>
  );
};
