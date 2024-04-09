import { useLoaderData } from 'react-router';
import { MerchandiseType } from '../../DataLoaders/productsLoader';
import { FeaturedCarousel } from './Featured/FeaturedCarousel';
import { Products } from './Products';
import { NoData } from '../../Components/NoData';
import { useEffect, useState } from 'react';
import { useBoundStore } from '../../Stores/boundStore';

export const Store: React.FC = () => {
  const loaderData = useLoaderData() as MerchandiseType;
  const selectedCategory = useBoundStore((state) => state.selectedCategory);
  const [loadingCategory, setloadingCategory] = useState(false);
  const featuredProducts = loaderData.validatedFeaturedProducts;
  const regularProducts = loaderData.validatedRegularProducts;
  const displayFeatured = featuredProducts && featuredProducts.length && selectedCategory === 'all';

  //TODO: Find better way to handle category change or loading status than below side effects. Consider filtering returned products on Frontend again.
  useEffect(() => {
    setloadingCategory(true);
  }, [selectedCategory]);

  useEffect(() => {
    setloadingCategory(false);
  }, [regularProducts]);

  return (
    <main>
      <h1 className="text-center text-h1 font-h1 md:text-6xl">Sad Boi Swag</h1>
      {displayFeatured ? <FeaturedCarousel featuredProducts={featuredProducts} /> : null}
      {regularProducts ? (
        <Products regularProducts={regularProducts} loadingCategory={loadingCategory} />
      ) : (
        <NoData title="Could Not Find Products" />
      )}
    </main>
  );
};
