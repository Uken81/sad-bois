import { formatCurrency } from '../../../Utils/Formatters/currencyFormatter';

export const FeaturedItemInfo: React.FC<{ title: string; subtitle: string; price: number }> = ({
  title,
  subtitle,
  price
}) => {
  const formattedPrice = formatCurrency(price);

  return (
    <div className="card-body flex justify-center">
      <div>
        <div className="badge badge-accent mb-4 self-end rounded-full font-bold">On Sale</div>
        <p className="card-title font-bold text-secondary">{title}</p>
        <p className="">{subtitle}</p>
      </div>
      <div className="card-actions ">
        <div className="badge badge-outline mt-2 rounded border-2 bg-base-300 p-6 text-xl font-extrabold">
          {formattedPrice}
        </div>
      </div>
    </div>
  );
};
