import { useOutletContext } from 'react-router';
import { ProductType } from './productsLoader';
import { StoreCategoryContextType } from '../RouteWrappers/storeWrapper';
import { ProductCard } from './ProductCard';
import { useEffect, useState } from 'react';

export const Featured: React.FC<{ featuredProducts: ProductType[] | null }> = ({
  featuredProducts
}) => {
  const { selectedCategory } = useOutletContext() as StoreCategoryContextType;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % (featuredProducts?.length || 1));
    }, 3000);
    // console.log('index', activeIndex);
    return () => clearInterval(interval);
  }, [featuredProducts, activeIndex]);

  if (!featuredProducts || featuredProducts.length === 0 || selectedCategory !== 'all') {
    return null;
  }

  return (
    <div className="carousel">
      {featuredProducts.map((item, index) => (
        <div
          onClick={() => console.log('id', item.id)}
          key={item.id}
          className={`carousel-item transition-opacity duration-1000 ${
            index === activeIndex
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          } absolute inset-0 w-full`}>
          <ProductCard product={item} />
        </div>
      ))}

      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <p
          className="btn btn-circle"
          onClick={() => setActiveIndex((current) => Math.max(current - 1, 0))}>
          ❮
        </p>
        <p
          className="btn btn-circle"
          onClick={() =>
            setActiveIndex((current) => Math.max(current + 1, 1) % (featuredProducts?.length || 1))
          }>
          ❯
        </p>
      </div>
    </div>
  );
};
