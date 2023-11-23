import { useLoaderData, useNavigate } from 'react-router';
import { Product } from '../productsLoader';
import './productOrders.scss';
import { useContext, useState } from 'react';
import { Size, SizeDropdown } from './SizeDropdown';
import { Quantity } from './Quantity';
import { Button } from 'react-bootstrap';
import shortid from 'shortid';
import { CartContext, CartContextType } from '../../../Context/CartContext';
import { useEffectAfterMount } from '../../../Hooks/useEffectAfterMount';
import { saveOrUpdateSessionStorage } from '../../../Utils/saveOrUpdateSessionStorage';

export interface ProductOrder {
  orderId: string;
  productId: string;
  name: string;
  img: string;
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
  const [newAdded, setNewAdded] = useState<boolean>(false);
  const navigate = useNavigate();

  const displayDropdown = category === 'clothing';

  const addProduct = async () => {
    console.log('OA1', newAdded);
    const orderId = shortid.generate();
    const productOrder: ProductOrder = {
      orderId,
      productId: id,
      name: subtitle,
      img,
      size,
      quantity,
      price,
      cost: price * quantity
    };

    setCart((prevCart) => {
      if (!prevCart) {
        return {
          items: [productOrder],
          subtotal: price * quantity
        };
      }

      return {
        items: [...prevCart.items, productOrder],
        subtotal: prevCart.subtotal + price * quantity
      };
    });
  };

  const handleSubmit = () => {
    setNewAdded(true);
    addProduct();
  };

  useEffectAfterMount(() => {
    if (cart) {
      console.log('updateLocal');
      saveOrUpdateSessionStorage('cart', cart);
    }
  }, [cart]);

  return (
    <div>
      <div>
        <img src={`/Assets/Products/${img}`} className="product-card" />
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
        {newAdded && <Button onClick={() => navigate('/store/view-cart')}>VIEW CART</Button>}
        {!newAdded && <Button onClick={handleSubmit}>ADD TO CART</Button>}
      </div>
      {newAdded && <p>Item added to cart</p>}
    </div>
  );
};
