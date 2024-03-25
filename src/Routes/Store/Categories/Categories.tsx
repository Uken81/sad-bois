import { Dispatch, SetStateAction } from 'react';
import { ProductCategories } from '../../RouteWrappers/StoreWrapper';
import { useNavigate } from 'react-router';
import { Category } from '../../../DataLoaders/productsLoader';

interface CategorySelector {
  categoryName: Category;
  text: string;
}

export const Categories: React.FC<{
  selectedCategory: Category;
  setSelectedCategory: Dispatch<SetStateAction<ProductCategories>>;
}> = ({ selectedCategory, setSelectedCategory }) => {
  const navigate = useNavigate();

  const handleCategoryChange = (category: ProductCategories) => {
    setSelectedCategory(category);
    navigate(`/store/${category}`);
  };

  const categorySelectors: CategorySelector[] = [
    {
      categoryName: 'all',
      text: 'All'
    },
    {
      categoryName: 'clothing',
      text: 'Clothing'
    },
    {
      categoryName: 'coffee-mug',
      text: 'Coffee-mugs'
    },
    {
      categoryName: 'sticker',
      text: 'stickers'
    },
    {
      categoryName: 'misc',
      text: 'Misc'
    }
  ];

  return (
    <ul className="mt-5 flex flex-col justify-center gap-10 md:flex-row md:text-primary">
      {categorySelectors.map((category, index) => {
        return (
          <li
            key={index}
            className={`cursor-pointer hover:text-accent hover:underline ${
              selectedCategory === category.categoryName ? 'text-accent' : ''
            }`}
            onClick={() => handleCategoryChange(category.categoryName)}>
            {category.text}
          </li>
        );
      })}
    </ul>
  );
};
