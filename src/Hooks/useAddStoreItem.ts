import { useOutletContext } from 'react-router';
import { CartContextType } from '../Routes/RouteWrappers/rootWrapper';
import shortid from 'shortid';
import { ProductType } from '../DataLoaders/productsLoader';
import { TourType } from '../Routes/RouteWrappers/TourWrapper';
import { ItemOrderData } from '../Components/AddToCart/AddButton';
import { format } from 'date-fns';

export interface ProductOrder {
  orderId: string;
  productId: string | null | number;
  name: string;
  img: string;
  size?: string | null;
  price: number;
  quantity: number;
  cost: number;
}

export const useAddStoreItem = () => {
  const { setCart } = useOutletContext() as CartContextType;

  function isProductType(item: ProductType | TourType): item is ProductType {
    return (item as ProductType).category !== undefined;
  }

  function isTourType(item: ProductType | TourType): item is TourType {
    return (item as TourType).venue !== undefined;
  }

  const addItem = (itemOrderData: ItemOrderData) => {
    const { item, quantity, size } = itemOrderData;
    const orderId = shortid.generate();
    let productOrder: ProductOrder;
    if (isProductType(item)) {
      const { id, img, subtitle, price } = item;

      productOrder = {
        orderId,
        productId: id,
        name: subtitle,
        img: img,
        size,
        quantity,
        price,
        cost: price * quantity
      };
    } else if (isTourType(item)) {
      const { date, venue } = item;
      const formattedDate = format(new Date(date), 'dd/MM/yyyy');
      const price = 119.99;
      productOrder = {
        orderId,
        productId: 1,
        name: `${venue} | ${formattedDate}`,
        img: 'merch14',
        quantity,
        price,
        cost: price * quantity
      };
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
