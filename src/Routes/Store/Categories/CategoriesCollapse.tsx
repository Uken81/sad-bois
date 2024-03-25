import { Dispatch, SetStateAction, useEffect } from 'react';
import { Categories } from './Categories';
import { ProductCategories } from '../../RouteWrappers/StoreWrapper';
import { BiSolidCategory } from 'react-icons/bi';
import { MobileCollapse } from '../../../Components/MobileCollapse';
import { Category } from '../../../DataLoaders/productsLoader';

export const CategoriesCollapse: React.FC<{
  selectedCategory: Category;
  setSelectedCategory: Dispatch<SetStateAction<ProductCategories>>;
}> = ({ selectedCategory, setSelectedCategory }) => {
  useEffect(() => {});
  return (
    <MobileCollapse icon={<BiSolidCategory />}>
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </MobileCollapse>
  );
};
