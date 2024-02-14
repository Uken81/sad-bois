import { ProductType } from '../../../DataLoaders/productsLoader';
import { FeaturedProductCard } from './FeaturedProductCard/FeaturedProductCard';

export const Featured: React.FC<{
  featuredProducts: ProductType[] | null;
  activeIndex: number;
}> = ({ featuredProducts, activeIndex }) => {
  return (
    <div className="carousel">
      {featuredProducts?.map((item, index) => (
        <div
          key={item.id}
          className={`carousel-item flex justify-center transition-opacity duration-1000 ${
            index === activeIndex
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          } absolute inset-0 w-full`}>
          <FeaturedProductCard product={item} />
        </div>
      ))}
    </div>
  );
};
