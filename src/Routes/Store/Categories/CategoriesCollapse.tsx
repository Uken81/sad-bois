import { Dispatch, SetStateAction } from 'react';
import { Categories } from './Categories';
import { BiSolidCategory } from 'react-icons/bi';
import { MobileCollapse } from '../../../Components/MobileCollapse';
import { ProductCategory } from './CategorySelector';

export const CategoriesCollapse: React.FC<{
  selectedCategory: ProductCategory;
  setSelectedCategory: Dispatch<SetStateAction<ProductCategory>>;
}> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <MobileCollapse icon={<BiSolidCategory />}>
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </MobileCollapse>
  );
};
