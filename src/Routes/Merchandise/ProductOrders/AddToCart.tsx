import { useLoaderData, useNavigate, useOutletContext } from 'react-router';
import { useState } from 'react';
import { SizeDropdown } from './SizeDropdown';
import { Quantity } from './Quantity';
import { Button } from 'react-bootstrap';
import { useEffectAfterMount } from '../../../Hooks/useEffectAfterMount';
import { saveOrUpdateSessionStorage } from '../../../Utils/saveOrUpdateSessionStorage';
import { ProductType } from '../productsLoader';
import shortid from 'shortid';
import { ShareButton } from '../../../Components/Share/ShareButton';
import { CartContextType } from '../../RouteWrappers/rootWrapper';
import './productOrders.scss';

export interface ProductOrder {
  orderId: string;
  productId: string;
  name: string;
  img: string;
  size?: string;
  price: number;
  //Todo: Add color?
  quantity: number;
  cost: number;
}

export const AddToCart: React.FC = () => {
  const loaderData = useLoaderData() as ProductType;
  const { id, img, title, subtitle, price, category } = loaderData;
  const { cart, setCart } = useOutletContext() as CartContextType;
  const [size, setSize] = useState<string>('m');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const navigate = useNavigate();
  const displayDropdown = category === 'clothing';

  const addProduct = async () => {
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
    setIsAdded(true);
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
        {isAdded ? <Button onClick={() => navigate('/store/view-cart')}>VIEW CART</Button> : null}
        {!isAdded ? <Button onClick={handleSubmit}>ADD TO CART</Button> : null}
      </div>
      {isAdded ? <p>Item added to cart</p> : null}
      <ShareButton />
    </div>
  );
};
