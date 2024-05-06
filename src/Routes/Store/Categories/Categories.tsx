import { useNavigate } from 'react-router';
import { capitaliseWords } from '../../../Utils/Formatters/capitaliseWords';
import { ProductCategory } from '../../../Types/types';
import { useStore } from '../../../Stores/useStore';

export const Categories: React.FC = () => {
  const selectedCategory = useStore((state) => state.categoryState.selectedCategory);
  const assignCategory = useStore((state) => state.categoryState.assignCategory);
  const navigate = useNavigate();

  const handleCategoryChange = (category: ProductCategory) => {
    assignCategory(category);
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
