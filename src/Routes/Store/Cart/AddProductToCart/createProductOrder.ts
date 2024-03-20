import { format } from 'date-fns';
import { ItemOrderData } from '../../../../Components/AddToCart/AddToCart';
import { ProductType } from '../../../../DataLoaders/productsLoader';
import { TourType } from '../../../RouteWrappers/TourWrapper';
import shortid from 'shortid';

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

export const createProductOrder = (itemOrderData: ItemOrderData) => {
  function isProductType(item: ProductType | TourType): item is ProductType {
    return (item as ProductType).category !== undefined;
  }

  function isTourType(item: ProductType | TourType): item is TourType {
    return (item as TourType).venue !== undefined;
  }

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

    return productOrder;
  }
};
