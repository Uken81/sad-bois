import { Dispatch, SetStateAction } from 'react';
import { Categories } from './Categories';
import { ProductCategories } from '../../RouteWrappers/storeWrapper';
import { BiSolidCategory } from 'react-icons/bi';
import { MobileCollapse } from '../../../Components/MobileCollapse';

export const CategoriesCollapse: React.FC<{
  setSelectedCategory: Dispatch<SetStateAction<ProductCategories>>;
}> = ({ setSelectedCategory }) => {
  return (
    <MobileCollapse icon={<BiSolidCategory />}>
      <Categories setSelectedCategory={setSelectedCategory} />
    </MobileCollapse>
  );
};
