import { useEffect } from 'react';
import { ShippingOptionsType } from '../Shipping/shippingOptions';
import { useOutletContext } from 'react-router';
import { useGetCart } from '../../../../Hooks/useGetCart';
import { CartContextType } from '../../../RouteWrappers/RootWrapper';
import { ProductImage } from './ProductImage';
import { ProductInfo } from './ProductInfo';
import { PurchaseInfo } from './PurchaseInfo';

export const OrderSummary: React.FC<{ selectedShipping: ShippingOptionsType }> = ({ selectedShipping }) => {
  const { cart, setCart } = useOutletContext() as CartContextType;
  const cartItems = cart?.items;
  const getCart = useGetCart();

  useEffect(() => {
    if (!cart) {
      const retrivedCart = getCart();
      setCart(retrivedCart);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!cart || !cart.items.length) {
    return (
      <div className="h-28 font-mono font-bold">
        <p>Cart is empty.</p>
      </div>
    );
  }

  return (
    <aside className="flex flex-col">
      {cartItems?.map((item) => {
        const { orderId, img, name, size, quantity, cost } = item;

        return (
          <div key={orderId} className="my-10 flex flex-row  rounded border bg-primary md:w-[400px] lg:w-[500] 2xl:w-[600px]">
            <ProductImage imageSrc={img} quantity={quantity} />
            <ProductInfo name={name} size={size} cost={cost} />
          </div>
        );
      })}
      <PurchaseInfo cart={cart} selectedShipping={selectedShipping} />
    </aside>
  );
};
