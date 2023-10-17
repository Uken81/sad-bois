import { Dispatch, SetStateAction } from 'react';
import { ProductCategories } from '../../context';

// export type ProductCategories = 'all' | 'clothing' | 'coffee-mug' | 'sticker' | 'misc';

export const Categories: React.FC<{
  setSelectedCategory?: Dispatch<SetStateAction<ProductCategories>>;
}> = ({ setSelectedCategory }) => {
  return (
    <div>
      <li onClick={() => setSelectedCategory!('all')}>All</li>
      <li onClick={() => setSelectedCategory!('clothing')}>Clothing</li>
      <li onClick={() => setSelectedCategory!('coffee-mug')}>Coffee Mugs</li>
      <li onClick={() => setSelectedCategory!('sticker')}>Stickers</li>
      <li onClick={() => setSelectedCategory!('misc')}>Misc</li>
    </div>
  );
};
