import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router';
import { capitaliseWords } from '../../../Utils/Formatters/capitaliseWords';
import { ProductCategory } from './CategorySelector';

export const Categories: React.FC<{
  selectedCategory: ProductCategory;
  setSelectedCategory: Dispatch<SetStateAction<ProductCategory>>;
}> = ({ selectedCategory, setSelectedCategory }) => {
  const navigate = useNavigate();

  const handleCategoryChange = (category: ProductCategory) => {
    setSelectedCategory(category);
    navigate(`/store/${category}`);
  };

  const categories: ProductCategory[] = ['all', 'clothing', 'mugs', 'stickers', 'misc'];

  return (
    <ul className="mt-5 flex flex-col justify-center gap-10 md:flex-row md:text-primary">
      {categories.map((category, index) => {
        const linkText = capitaliseWords(category);

        return (
          <li
            key={index}
            className={`cursor-pointer hover:text-accent hover:underline ${selectedCategory === category ? 'text-accent' : ''}`}
            onClick={() => handleCategoryChange(category)}>
            {linkText}
          </li>
        );
      })}
    </ul>
  );
};
