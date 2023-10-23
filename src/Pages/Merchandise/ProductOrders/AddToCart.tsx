import { useLoaderData } from 'react-router';
import { Product } from '../merchandiseLoader';
import './productOrders.scss';
import { useEffect, useState } from 'react';
import { Size, SizeDropdown } from './SizeDropdown';

export interface ProductOrder {
  id: string;
  size: Size;
  //Todo: Add color?
  quantity: number;
}

export const AddToCart: React.FC = () => {
  const loaderData = useLoaderData() as Product;
  const { id, img, title, subtitle, price } = loaderData;
  const [productOrder, setProductOrder] = useState<ProductOrder>({ id, size: 'm', quantity: 1 });
  const selectedSize = productOrder.size;
  console.log('selected', selectedSize);

  useEffect(() => {
    console.log('productOrder', productOrder);
  }, [productOrder]);

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
        <SizeDropdown setProductOrder={setProductOrder} selectedSize={selectedSize} />
      </div>
    </div>
  );
};
