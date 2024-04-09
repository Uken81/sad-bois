import { Categories } from './Categories';
import { CategoriesCollapse } from './CategoriesCollapse';

export const CategorySelector: React.FC = () => {
  return (
    <>
      <div className="hidden md:block">
        <Categories />
      </div>
      <div className="flex justify-center md:hidden">
        <CategoriesCollapse />
      </div>
    </>
  );
};
