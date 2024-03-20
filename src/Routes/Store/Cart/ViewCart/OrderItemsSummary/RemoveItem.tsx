import { CartContextType } from '../../../../RouteWrappers/RootWrapper';
import { ProductOrder } from '../../AddProductToCart/AddProductToCart';
import { useOutletContext } from 'react-router';

export const RemoveItem: React.FC<{ productOrder: ProductOrder }> = ({ productOrder }) => {
  const { cart, setCart } = useOutletContext() as CartContextType;

  const removeItem = (productOrder: ProductOrder) => {
    const { orderId, cost } = productOrder;
    const filteredArr = cart?.items?.filter((item) => item.orderId !== orderId) || [];

    setCart((prev) => ({
      ...prev,
      items: filteredArr,
      subtotal: prev?.subtotal ? prev!.subtotal - cost : null
    }));
  };

  return (
    <p
      className="mt-4 font-bold hover:cursor-pointer hover:text-gray-400"
      onClick={() => removeItem(productOrder)}>
      Remove
    </p>
  );
};
