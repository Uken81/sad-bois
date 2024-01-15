import { useOutletContext } from 'react-router';
import { ProductType } from '../productsLoader';
import { StoreCategoryContextType } from '../../RouteWrappers/storeWrapper';
import { ProductCard } from '../ProductCard';

export const Featured: React.FC<{
  featuredProducts: ProductType[] | null;
  activeIndex: number;
}> = ({ featuredProducts, activeIndex }) => {
  const { selectedCategory } = useOutletContext() as StoreCategoryContextType;

  if (!featuredProducts || featuredProducts.length === 0 || selectedCategory !== 'all') {
    return null;
  }

  return (
    <div className="carousel">
      {featuredProducts.map((item, index) => (
        <div
          onClick={() => console.log('id', item.id)}
          key={item.id}
          className={`carousel-item flex justify-center transition-opacity duration-1000 ${
            index === activeIndex
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          } absolute inset-0 w-full`}>
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  );
};
