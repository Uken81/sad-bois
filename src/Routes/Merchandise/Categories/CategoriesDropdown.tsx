import { Dispatch, SetStateAction } from 'react';
import { Categories } from './Categories';
import { ProductCategories } from '../../RouteWrappers/storeWrapper';

export const CategoriesDropdown: React.FC<{
  setSelectedCategory: Dispatch<SetStateAction<ProductCategories>>;
}> = ({ setSelectedCategory }) => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow mt-5 w-48 border border-base-300 bg-primary-content">
      <div className="collapse-title text-xl font-medium">Categories</div>
      <div className="collapse-content">
        <Categories setSelectedCategory={setSelectedCategory} />
      </div>
    </div>
  );
};
