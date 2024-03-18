import { useOutletContext } from 'react-router';
import { CartContextType } from '../Routes/RouteWrappers/rootWrapper';
import shortid from 'shortid';
import { ProductType } from '../DataLoaders/productsLoader';
import { TourType } from '../Routes/RouteWrappers/TourWrapper';
import { useEffect } from 'react';
import { ItemOrderData } from '../Components/AddToCart/AddButton';

export interface ProductOrder {
  orderId: string;
  productId: string | null;
  name: string;
  img: string;
  size?: string | null;
  price: number;
  quantity: number;
  cost: number;
}

export const useAddStoreItem = () => {
  const { cart, setCart } = useOutletContext() as CartContextType;
  //Todo: delete effect
  useEffect(() => {
    console.log('Cart', cart);
  }, [cart]);

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
      console.log('isProduct');
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
      console.log('isShow');
      const { id, date, venue } = item;
      //Todo: Add price to db!!, Add error if status is not 'on sale'??
      const price = 119.99;
      productOrder = {
        orderId,
        //Todo: create product id for all tickets in one product in db.
        productId: id,
        name: `${venue} | ${date}`,
        img: 'merch3',
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
