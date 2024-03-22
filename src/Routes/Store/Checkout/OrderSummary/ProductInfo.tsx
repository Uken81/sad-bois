import { formatCurrency } from '../../../../Utils/Formatters/currencyFormatter';

export const ProductInfo: React.FC<{ name: string; size?: string | null; cost: number }> = ({
  name,
  size,
  cost
}) => {
  const formattedCost = formatCurrency(cost);

  return (
    <div className="flex w-full flex-row items-center justify-between">
      <div className="ml-4 flex flex-col">
        <div className="font-bold">{name}</div>
        {size ? <div className="uppercase">{size}</div> : null}
      </div>
      <div className="pr-4 font-bold">{formattedCost}</div>
    </div>
  );
};
