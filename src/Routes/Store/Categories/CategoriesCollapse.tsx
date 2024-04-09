import { Categories } from './Categories';
import { BiSolidCategory } from 'react-icons/bi';
import { MobileCollapse } from '../../../Components/MobileCollapse';

export const CategoriesCollapse: React.FC = () => {
  return (
    <MobileCollapse icon={<BiSolidCategory />}>
      <Categories />
    </MobileCollapse>
  );
};
