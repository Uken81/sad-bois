import { useLoaderData, useNavigate } from 'react-router';
import { Product } from '../merchandiseLoader';
import './productOrders.scss';
import { useContext, useEffect, useState } from 'react';
import { Size, SizeDropdown } from './SizeDropdown';
import { Quantity } from './Quantity';
import { Button } from 'react-bootstrap';
import { CartContext, CartContextType } from '../../../context';

export interface ProductOrder {
  id: string;
  size?: Size | undefined;
  //Todo: Add color?
  quantity: number;
  cost: number;
}

// export interface Cart {
//   items: ProductOrder[];
//   subtotal: number;
// }

export const AddToCart: React.FC = () => {
  const loaderData = useLoaderData() as Product;
  const { id, img, title, subtitle, price, category } = loaderData;
  const { cart, setCart } = useContext(CartContext) as CartContextType;
  // const [cart, setCart] = useState<Cart | undefined>(undefined);
  const [size, setSize] = useState<Size | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const [orderAdded, setOrderAdded] = useState(false);
  const navigate = useNavigate();

  const displayDropdown = category === 'clothing';

  const handleSubmit = () => {
    const newOrder: ProductOrder = { id, size, quantity, cost: price * quantity };

    setCart((prevCart) => {
      if (!prevCart) {
        console.log('prevcart');
        return {
          items: [newOrder],
          subtotal: price * quantity
        };
      }
      console.log('occcart');

      return {
        items: [...prevCart.items, newOrder],
        subtotal: prevCart.subtotal + price * quantity
      };
    });

    setOrderAdded(true);
  };

  useEffect(() => {
    if (!cart) {
      console.log('no cart');
      return;
    }

    const cartData = JSON.stringify(cart);
    localStorage.setItem('cart', cartData);

    console.log('cart saved');
  }, [cart]);

  useEffect(() => {
    console.log('size', size);
    console.log('quantity', quantity);
    console.log('cart', cart);
  }, [quantity, size, cart]);

  const button = orderAdded ? (
    <Button onClick={() => navigate('/')}>VIEW CART</Button>
  ) : (
    <Button onClick={handleSubmit}>ADD TO CART</Button>
  );

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
        <SizeDropdown setSize={setSize} size={size} display={displayDropdown} />
        <Quantity setQuantity={setQuantity} />
      </div>
      <div>{button}</div>
    </div>
  );
};
