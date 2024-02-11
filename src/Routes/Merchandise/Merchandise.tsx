import { useLoaderData } from 'react-router';
import { MerchandiseType } from '../../DataLoaders/productsLoader';
import { FeaturedCarousel } from './Featured/FeaturedCarousel';
import { Products } from './Products';
import { NoData } from '../../Components/NoData';

export const Merchandise: React.FC = () => {
  const loaderData = useLoaderData() as MerchandiseType;
  const featuredProducts = loaderData.camelisedFeaturedProducts?.length
    ? loaderData.camelisedFeaturedProducts
    : null;
  const regularProducts = loaderData.camelisedRegularProducts?.length
    ? loaderData.camelisedRegularProducts
    : null;

  return (
    <main>
      <h1 className="text-center text-h1 font-h1">Sad Boi Swag</h1>
      {featuredProducts ? <FeaturedCarousel featuredProducts={featuredProducts} /> : null}
      {regularProducts ? (
        <Products regularProducts={regularProducts} />
      ) : (
        <NoData title="Could Not Find Products" />
      )}
    </main>
  );
};
