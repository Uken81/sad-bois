import { useLoaderData, useOutletContext } from 'react-router';
import { MerchandiseType } from '../../DataLoaders/productsLoader';
import { FeaturedCarousel } from './Featured/FeaturedCarousel';
import { Products } from './Products';
import { NoData } from '../../Components/NoData';
import { StoreCategoryContextType } from '../RouteWrappers/storeWrapper';

export const Store: React.FC = () => {
  const loaderData = useLoaderData() as MerchandiseType;
  const { selectedCategory } = useOutletContext() as StoreCategoryContextType;
  const featuredProducts = loaderData.camelisedFeaturedProducts?.length
    ? loaderData.camelisedFeaturedProducts
    : null;
  const regularProducts = loaderData.camelisedRegularProducts?.length
    ? loaderData.camelisedRegularProducts
    : null;

  const displayFeatured = featuredProducts && featuredProducts.length && selectedCategory === 'all';

  return (
    <main>
      <h1 className="text-center text-h1 font-h1">Sad Boi Swag</h1>
      {displayFeatured ? <FeaturedCarousel featuredProducts={featuredProducts} /> : null}
      {regularProducts ? (
        <Products regularProducts={regularProducts} />
      ) : (
        <NoData title="Could Not Find Products" />
      )}
    </main>
  );
};
