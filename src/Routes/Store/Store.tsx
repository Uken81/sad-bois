import { useLoaderData, useOutletContext } from 'react-router';
import { MerchandiseType } from '../../DataLoaders/productsLoader';
import { FeaturedCarousel } from './Featured/FeaturedCarousel';
import { Products } from './Products';
import { NoData } from '../../Components/NoData';
import { StoreCategoryContextType } from '../RouteWrappers/StoreWrapper';
import { useEffect, useState } from 'react';

export const Store: React.FC = () => {
  const loaderData = useLoaderData() as MerchandiseType;
  const { selectedCategory } = useOutletContext() as StoreCategoryContextType;
  const [loadingCategory, setloadingCategory] = useState(false);
  const featuredProducts = loaderData.camelisedFeaturedProducts;
  const regularProducts = loaderData.camelisedRegularProducts;
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
