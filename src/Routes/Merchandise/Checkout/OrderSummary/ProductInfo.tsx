import { formatCurrency } from '../../../../Utils/currencyFormatter';

export const ProductInfo: React.FC<{ name: string; size?: string; cost: number }> = ({
  name,
  size,
  cost
}) => {
  const formattedCost = formatCurrency(cost);

  return (
    <div className="mx-5 flex w-1/2 flex-row items-center justify-between">
      <div className="= flex flex-col">
        <div className="font-bold">{name}</div>
        {size ? <div className="uppercase">{size}</div> : null}
      </div>
      <div className="font-bold">{formattedCost}</div>
    </div>
  );
};
