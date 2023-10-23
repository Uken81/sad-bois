import { useLoaderData } from 'react-router';
import { Product } from '../merchandiseLoader';
import './productOrders.scss';
import { useEffect, useState } from 'react';
import { Size, SizeDropdown } from './SizeDropdown';
import { Quantity } from './Quantity';

export interface ProductOrder {
  id: string;
  size?: Size | undefined;
  //Todo: Add color?
  quantity: number;
}

export const AddToCart: React.FC = () => {
  const loaderData = useLoaderData() as Product;
  const { id, img, title, subtitle, price, category } = loaderData;
  const [size, setSize] = useState<Size | undefined>(undefined);
  const [quantity, setQuantity] = useState<number>(1);
  const [productOrder, setProductOrder] = useState<ProductOrder>({
    id,
    size: undefined,
    quantity: 1
  });
  const displaySize = category === 'clothing';

  useEffect(() => {
    console.log('size', size);
    console.log('quantity', quantity);
    console.log('productOrder', productOrder);
  }, [productOrder, quantity, size]);

  return (
    <div>
      <div>
        <img src={`../../../../public/Assets/Products/${img}`} className="product-card" />
      </div>
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <h2>{price}</h2>
        <p>Shipping calculated at checkout</p>
      </div>
      <div>
        <SizeDropdown setSize={setSize} size={size} display={displaySize} />
        <Quantity setQuantity={setQuantity} />
      </div>
    </div>
  );
};
