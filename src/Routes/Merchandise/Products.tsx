import { useOutletContext } from 'react-router';
import { StoreCategoryContextType } from '../RouteWrappers/storeWrapper';
import { ProductType } from './productsLoader';
import { ProductCard } from './ProductCard/ProductCard';

export const Products: React.FC<{ regularProducts: ProductType[] }> = ({ regularProducts }) => {
  const { selectedCategory } = useOutletContext() as StoreCategoryContextType;
  const displayedProducts =
    selectedCategory === 'all'
      ? regularProducts
      : regularProducts.filter((item) => item.category === selectedCategory);

  return (
    <div className=" my-14 grid grid-cols-1 justify-items-center gap-6 md:mx-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 xl:mx-40 xl:gap-12">
      {displayedProducts.map((item) => {
        return <ProductCard key={item.id} product={item} />;
      })}
    </div>
  );
};
