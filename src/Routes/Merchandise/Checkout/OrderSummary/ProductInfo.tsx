import { formatCurrency } from '../../../../Utils/currencyFormatter';

export const ProductInfo: React.FC<{ name: string; size?: string; cost: number }> = ({
  name,
  size,
  cost
}) => {
  const formattedCost = formatCurrency(cost);

  return (
    <div className=" flex w-2/3 flex-row items-center justify-between">
      <div className="= ml-4 flex flex-col">
        <div className="font-bold">{name}</div>
        {size ? <div className="uppercase">{size}</div> : null}
      </div>
      <div className="ml-auto font-bold">{formattedCost}</div>
    </div>
  );
};
