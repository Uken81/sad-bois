import { ProductImage } from './ProductImage';
import { ProductInfo } from './ProductInfo';
import { PurchaseInfo } from './PurchaseInfo';
import { useBoundStore } from '../../../../Stores/boundStore';

export const OrderSummary: React.FC = () => {
  const cart = useBoundStore((state) => state.cart);
  const cartItems = cart?.items;

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
      <PurchaseInfo />
    </aside>
  );
};
