import { ProductOrder } from '../../AddProductToCart/createProductOrder';
import { useStore } from '../../../../../Stores/useStore';

export const RemoveItem: React.FC<{ productOrder: ProductOrder }> = ({ productOrder }) => {
  const removeItem = useStore((state) => state.cartState.removeItem);

  return (
    <p className="mt-4 font-bold hover:cursor-pointer hover:text-gray-400" onClick={() => removeItem(productOrder)}>
      Remove
    </p>
  );
};
