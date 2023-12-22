import { Dispatch, SetStateAction } from 'react';
import { Categories } from './Categories';
import { ProductCategories } from '../../RouteWrappers/storeWrapper';
import { BiSolidCategory } from 'react-icons/bi';

export const CategoriesDropdown: React.FC<{
  setSelectedCategory: Dispatch<SetStateAction<ProductCategories>>;
}> = ({ setSelectedCategory }) => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow mt-5 w-32 border border-black text-center">
      {/* <div className="collapse-title text-xl font-medium">Categories</div> */}
      <div className="flex  justify-center py-1">
        <BiSolidCategory />
      </div>
      <div className="collapse-content">
        <Categories setSelectedCategory={setSelectedCategory} />
      </div>
    </div>
  );
};
