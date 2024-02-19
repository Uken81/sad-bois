import { capitaliseWords } from '../../../Utils/capitaliseWords';
import { formatCurrency } from '../../../Utils/currencyFormatter';

export const ItemInfo: React.FC<{ title: string; subtitle: string; price: number }> = ({
  title,
  subtitle,
  price
}) => {
  const formattedPrice = formatCurrency(price);
  const capitalisedTitle = capitaliseWords(title);
  const capitalisedSubtitle = capitaliseWords(subtitle);

  return (
    <div className="card-body flex h-1/2 items-center space-x-2 bg-primary">
      <p className="card-title font-bold text-accent">{capitalisedTitle}</p>
      <p>{capitalisedSubtitle}</p>
      <div className="card-actions">
        <div className="badge badge-outline mt-2 rounded border-2 bg-base-300 p-6 text-xl font-extrabold">
          {formattedPrice}
        </div>
      </div>
    </div>
  );
};
