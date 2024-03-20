import { useOutletContext } from 'react-router';
import { CartContextType } from '../Routes/RouteWrappers/rootWrapper';
import { ItemOrderData } from '../Components/AddToCart/AddToCart';
import { createProductOrder } from '../Routes/Store/Cart/AddProductToCart/createProductOrder';
import { Dispatch, SetStateAction } from 'react';

export const useAddStoreItem = () => {
  const { setCart } = useOutletContext() as CartContextType;

  const addItem = (itemOrderData: ItemOrderData, setIsError: Dispatch<SetStateAction<boolean>>) => {
    const { quantity } = itemOrderData;
    const productOrder = createProductOrder(itemOrderData);

    if (!productOrder) {
      console.error('Failed to create product order');
      setIsError(true);
      return;
    }

    setCart((prevCart) => {
      if (!prevCart) {
        return {
          items: [productOrder],
          subtotal: productOrder.price * quantity
        };
      }

      const recalculatedSubtotal = prevCart.subtotal
        ? prevCart.subtotal + productOrder.price * quantity
        : productOrder.price * quantity;

      return {
        items: [...prevCart.items, productOrder],
        subtotal: recalculatedSubtotal
      };
    });
  };

  return addItem;
};
