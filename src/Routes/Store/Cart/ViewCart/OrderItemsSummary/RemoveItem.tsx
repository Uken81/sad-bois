import { ProductOrder } from '../../AddProductToCart/createProductOrder';
import { useBoundStore } from '../../../../../Stores/boundStore';

export const RemoveItem: React.FC<{ productOrder: ProductOrder }> = ({ productOrder }) => {
  const removeItem = useBoundStore((state) => state.removeItem);

  return (
    <p className="mt-4 font-bold hover:cursor-pointer hover:text-gray-400" onClick={() => removeItem(productOrder)}>
      Remove
    </p>
  );
};
