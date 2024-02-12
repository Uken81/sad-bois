import { useLoaderData, useOutletContext } from 'react-router';
import { useState } from 'react';
import { SizeSelectors } from './SizeSelectors';
import { Quantity } from './Quantity';
import { useEffectAfterMount } from '../../../../Hooks/useEffectAfterMount';
import { saveOrUpdateSessionStorage } from '../../../../Utils/saveOrUpdateSessionStorage';
import { ProductType } from '../../../../DataLoaders/productsLoader';
import shortid from 'shortid';
import { ShareButton } from '../../../../Components/Share/ShareButton';
import { CartContextType } from '../../../RouteWrappers/rootWrapper';
import { ShareOptions } from '../../../../Components/Share/ShareOptions';
import { AddButton } from './AddButton';

export interface ProductOrder {
  orderId: string;
  productId: string;
  name: string;
  img: string;
  size?: string;
  price: number;
  quantity: number;
  cost: number;
}

export const AddToCart: React.FC = () => {
  const loaderData = useLoaderData() as ProductType;
  const { id, img, title, subtitle, price, category } = loaderData;
  const { cart, setCart } = useOutletContext() as CartContextType;
  const [size, setSize] = useState<string>('l');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);
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
      saveOrUpdateSessionStorage('cart', cart);
    }
  }, [cart]);

  return (
    <div className="flex h-full flex-col items-center gap-4 md:mx-24 md:my-24 md:flex-row md:gap-0 xl:mx-64">
      <div className="flex h-full w-1/2 justify-center">
        <img src={`/Assets/Products/${img}`} className="h-48 md:h-96" />
      </div>
      <div className="align-middle md:flex md:w-1/2 md:flex-col md:space-y-10">
        <div className="text-center md:space-y-2">
          <h1 className="h1-font md:text-5xl">{title}</h1>
          <h2 className="h2-font">{subtitle}</h2>
          <h2 className="h2-font ">${price}</h2>
        </div>
        <div className="flex flex-col items-center gap-6">
          <p className="text-secondary">Shipping calculated at checkout</p>
          <SizeSelectors size={size} setSize={setSize} display={displayDropdown} />
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          <AddButton isAdded={isAdded} handleSubmit={handleSubmit} />
        </div>
        {isAdded ? <p className="mt-1 text-center font-mono">Item added to cart</p> : null}
        <div className="my-4 flex justify-center md:my-0">
          <div className="hidden md:flex">
            <ShareButton />
          </div>
          <div className="md:hidden">
            <ShareOptions showOptions={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
