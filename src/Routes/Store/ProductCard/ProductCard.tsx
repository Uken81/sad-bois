import { useNavigate } from 'react-router';
import { ProductType } from '../../../DataLoaders/productsLoader';
import { ItemImage } from './ItemImage';
import { ItemInfo } from './ItemInfo';

export const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  const navigate = useNavigate();
  const { id, img, title, subtitle, price, isFeatured } = product;

  return (
    <div
      key={id}
      className="card max-h-96 w-80 bg-yellow-50 shadow-xl hover:cursor-pointer"
      onClick={() => navigate(`/store/add-to-cart/${id}`)}>
      <ItemImage img={img} isFeatured={isFeatured} />
      <ItemInfo title={title} subtitle={subtitle} price={price} />
    </div>
  );
};
