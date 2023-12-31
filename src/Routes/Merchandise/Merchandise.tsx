import { useLoaderData } from 'react-router';
import { Featured } from './Featured';
import { Products } from './Products';
import { MerchandiseType } from './productsLoader';
import './merchandise.scss';

export const Merchandise: React.FC = () => {
  const loaderData = useLoaderData() as MerchandiseType;
  const featuredProducts = loaderData.featured;
  const regularProducts = loaderData.regular;

  return (
    <main>
      <h1>Swag</h1>
      <Featured featuredProducts={featuredProducts} />
      <Products regularProducts={regularProducts} />
    </main>
  );
};
