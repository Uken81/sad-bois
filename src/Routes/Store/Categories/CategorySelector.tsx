import { Dispatch, SetStateAction } from 'react';
import { Categories } from './Categories';
import { CategoriesCollapse } from './CategoriesCollapse';

export const CategorySelector: React.FC<{
  selectedCategory: ProductCategory;
  setSelectedCategory: Dispatch<SetStateAction<ProductCategory>>;
}> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
      <div className="hidden md:block">
        <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="flex justify-center md:hidden">
        <CategoriesCollapse selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
    </>
  );
};
