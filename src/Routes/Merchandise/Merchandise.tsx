import { useLoaderData } from 'react-router';
import { Featured } from './Featured';
import { Products } from './Products';
import { MerchandiseType } from './productsLoader';

export const Merchandise: React.FC = () => {
  const loaderData = useLoaderData() as MerchandiseType;
  const featuredProducts = loaderData.featured;
  const regularProducts = loaderData.regular;

  return (
    <main>
      <h1 className="h1-font text-center">Sad Boi Swag</h1>
      <div className="relative h-96">
        <div className=" mb-10 mt-10">
          <Featured featuredProducts={featuredProducts} />
        </div>
      </div>
      <Products regularProducts={regularProducts} />
    </main>
  );
};
