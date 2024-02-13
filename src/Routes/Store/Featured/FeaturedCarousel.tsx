import { useState } from 'react';
import { Featured } from './Featured';
import { TransitionButtons } from './TransitionButtons';
import { ProductType } from '../../../DataLoaders/productsLoader';

export const FeaturedCarousel: React.FC<{ featuredProducts: ProductType[] }> = ({
  featuredProducts
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="relative mb-5 mt-10 h-96">
        <Featured featuredProducts={featuredProducts} activeIndex={activeIndex} />
      </div>
      <TransitionButtons
        arrLength={featuredProducts?.length ?? 0}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </>
  );
};
