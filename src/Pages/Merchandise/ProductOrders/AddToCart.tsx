import { useLoaderData, useNavigate } from 'react-router';
import { Product } from '../merchandiseLoader';
import './productOrders.scss';
import { useContext, useEffect, useState } from 'react';
import { Size, SizeDropdown } from './SizeDropdown';
import { Quantity } from './Quantity';
import { Button } from 'react-bootstrap';
import { CartContext, CartContextType } from '../../../context';
import shortid from 'shortid';

export interface ProductOrder {
  orderId: string;
  productId: string;
  name: string;
  size?: Size | undefined;
  price: number;
  //Todo: Add color?
  quantity: number;
  cost: number;
}

export const AddToCart: React.FC = () => {
  const loaderData = useLoaderData() as Product;
  const { id, img, title, subtitle, price, category } = loaderData;
  const { cart, setCart } = useContext(CartContext) as CartContextType;
  const [size, setSize] = useState<Size | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const [orderAdded, setOrderAdded] = useState<boolean>(false);
  const [isTrue, setIsTrue] = useState(false);
  const navigate = useNavigate();

  const displayDropdown = category === 'clothing';

  const addOrder = async () => {
    const orderId = shortid.generate();
    const newOrder: ProductOrder = {
      orderId,
      productId: id,
      name: title,
      size,
      quantity,
      price,
      cost: price * quantity
    };

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
  };

  const handleSubmit = () => {
    setOrderAdded(true);

    // await tru();
    addOrder();
    // setOrderAdded(true);

    //try seperating into a function

    console.log('set');
  };

  useEffect(() => {
    if (!cart) {
      console.log('no cart');
      return;
    }
    // setIsTrue(true);
    // addOrder();
    const cartData = JSON.stringify(cart);
    localStorage.setItem('cart', cartData);

    console.log('cart saved');
  }, [cart]);

  useEffect(() => {
    // console.log('size', size);
    // console.log('quantity', quantity);
    console.log('orderAdded', orderAdded);
    console.log('cart', cart);
  }, [quantity, size, cart, orderAdded]);

  useEffect(() => {
    console.log('AddToCart mounted');

    return () => {
      console.log('AddToCart unmounted');
    };
  }, []);

  // const button = orderAdded ? (
  //   <Button onClick={() => navigate('/cart')}>VIEW CART</Button>
  // ) : (

  // );

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

      <div>
        {orderAdded ? (
          <Button onClick={() => navigate('/cart')}>VIEW CART</Button>
        ) : (
          <Button onClick={handleSubmit}>ADD TO CART</Button>
        )}
      </div>
      <Button onClick={() => navigate('/cart')}>VIEW CART</Button>
    </div>
  );
};
