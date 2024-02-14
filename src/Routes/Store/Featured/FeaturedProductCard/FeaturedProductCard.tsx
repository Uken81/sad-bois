import { ProductType } from '../../../../DataLoaders/productsLoader';
import { FeaturedItemInfo } from '../FeaturedItemInfo';
import { FeaturedItemImage } from './FeaturedItemImage';

export const FeaturedProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  const { id, img, title, subtitle, price } = product;

  return (
    <div className="card card-side w-full bg-base-100 shadow-xl hover:cursor-pointer">
      <FeaturedItemImage id={id} img={img} />
      <FeaturedItemInfo title={title} subtitle={subtitle} price={price} />
    </div>
  );
};
