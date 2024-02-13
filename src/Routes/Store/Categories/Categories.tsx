import { Dispatch, SetStateAction } from 'react';
import { ProductCategories } from '../../RouteWrappers/StoreWrapper';
import { useNavigate } from 'react-router';

export const Categories: React.FC<{
  setSelectedCategory: Dispatch<SetStateAction<ProductCategories>>;
}> = ({ setSelectedCategory }) => {
  const navigate = useNavigate();

  const changeCategory = (category: ProductCategories) => {
    setSelectedCategory(category);
    navigate(`/store/${category}`);
  };

  return (
    <ul className="mt-5 flex flex-col justify-center gap-10 md:flex-row md:text-primary">
      <li
        className="cursor-pointer hover:text-accent hover:underline"
        onClick={() => changeCategory('all')}>
        All
      </li>
      <li
        className="cursor-pointer hover:text-accent hover:underline"
        onClick={() => changeCategory('clothing')}>
        Clothing
      </li>
      <li
        className="cursor-pointer hover:text-accent hover:underline"
        onClick={() => changeCategory('coffee-mug')}>
        Coffee Mugs
      </li>
      <li
        className="cursor-pointer hover:text-accent hover:underline"
        onClick={() => changeCategory('sticker')}>
        Stickers
      </li>
      <li
        className="cursor-pointer hover:text-accent hover:underline"
        onClick={() => changeCategory('misc')}>
        Misc
      </li>
    </ul>
  );
};
