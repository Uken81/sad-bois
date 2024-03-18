import { useLoaderData, useOutletContext } from 'react-router';
import { useState } from 'react';
import { SizeSelectors } from './SizeSelectors';
import { Quantity } from './Quantity';
import { useEffectAfterMount } from '../../../../Hooks/useEffectAfterMount';
import { ProductType } from '../../../../DataLoaders/productsLoader';
import { ShareButton } from '../../../../Components/Share/ShareButton';
import { CartContextType } from '../../../RouteWrappers/rootWrapper';
import { ShareOptions } from '../../../../Components/Share/ShareOptions';
import { AddButton } from './AddButton';
import { updateSessionStorage } from '../../../../Utils/saveOrUpdateSessionStorage';
import { useAddStoreItem } from '../../../../Hooks/useAddStoreItem';

export const AddToCart: React.FC = () => {
  const product = useLoaderData() as ProductType;
  const { img, title, subtitle, price, category } = product;
  const { cart } = useOutletContext() as CartContextType;
  const addProduct = useAddStoreItem();
  const [size, setSize] = useState<string | null>(category === 'clothing' ? 'l' : null);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const handleSubmit = () => {
    setIsAdded(true);
    addProduct(product, quantity, size);
  };

  //do i need this? if so can i move it to next screen??
  //Also rename file name to match function name.
  useEffectAfterMount(() => {
    if (cart) {
      updateSessionStorage('cart', cart);
    }
  }, [cart]);

  return (
    <div className="flex h-full flex-col items-center gap-4 md:mx-24 md:my-24 md:flex-row md:gap-0 xl:mx-64">
      <div className="flex h-full w-1/2 justify-center">
        <img src={`/Assets/Products/${img}.png`} className="h-48 md:h-96" />
      </div>
      {/*this can possibly be shared with AddTicketToCart*/}
      <div className="align-middle md:flex md:w-1/2 md:flex-col md:space-y-10">
        <div className="text-center md:space-y-2">
          <h1 className="h1-font md:text-5xl">{title}</h1>
          <h2 className="h2-font">{subtitle}</h2>
          <h2 className="h2-font ">${price}</h2>
        </div>
        <div className="flex flex-col items-center gap-6">
          <p className="text-secondary">Shipping calculated at checkout</p>
          <SizeSelectors size={size} setSize={setSize} />
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
