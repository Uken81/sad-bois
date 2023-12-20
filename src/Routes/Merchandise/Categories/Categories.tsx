import { Dispatch, SetStateAction } from 'react';
import { ProductCategories } from '../../RouteWrappers/storeWrapper';

export const Categories: React.FC<{
  setSelectedCategory: Dispatch<SetStateAction<ProductCategories>>;
}> = ({ setSelectedCategory }) => {
  return (
    <ul className="my-5 flex flex-col justify-center gap-10 md:flex-row">
      <li className="cursor-pointer hover:text-accent" onClick={() => setSelectedCategory('all')}>
        All
      </li>
      <li
        className="cursor-pointer hover:text-accent"
        onClick={() => setSelectedCategory!('clothing')}>
        Clothing
      </li>
      <li
        className="cursor-pointer hover:text-accent"
        onClick={() => setSelectedCategory('coffee-mug')}>
        Coffee Mugs
      </li>
      <li
        className="cursor-pointer hover:text-accent"
        onClick={() => setSelectedCategory!('sticker')}>
        Stickers
      </li>
      <li className="cursor-pointer hover:text-accent" onClick={() => setSelectedCategory!('misc')}>
        Misc
      </li>
    </ul>
  );
};
