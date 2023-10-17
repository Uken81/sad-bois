import { useState } from 'react';
import { Featured } from './Featured';
import { Products } from './Products';
import './merchandise.scss';
import { Categories, ProductCategories } from './Categories';

export const Merchandise: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategories>('all');
  return (
    <main>
      <h1>Swag</h1>
      <Featured />
      <Categories setSelectedCategory={setSelectedCategory} />
      <Products selectedCategory={selectedCategory} />
    </main>
  );
};
