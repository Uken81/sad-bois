import { useLoaderData } from 'react-router';
import { Featured } from './Featured/Featured';
import { Products } from './Products';
import { MerchandiseType } from './productsLoader';
import { useState } from 'react';
import { TransitionButtons } from './Featured/TransitionButtons';

export const Merchandise: React.FC = () => {
  const loaderData = useLoaderData() as MerchandiseType;
  const featuredProducts = loaderData.featured;
  const regularProducts = loaderData.regular;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main>
      <h1 className="h1-font text-center">Sad Boi Swag</h1>
      <div className="relative mb-2 mt-10 h-96">
        <Featured featuredProducts={featuredProducts} activeIndex={activeIndex} />
      </div>
      <TransitionButtons
        arrLength={featuredProducts?.length ?? 0}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <Products regularProducts={regularProducts} />
    </main>
  );
};
