import { CartType } from '../../../../RouteWrappers/RootWrapper';
import { PriceDetails } from './PriceDetails';
import { RemoveItem } from './RemoveItem';

export const OrderItemsSummary: React.FC<{ cart: CartType | null }> = ({ cart }) => {
  return (
    <>
      {cart?.items?.map((item) => {
        const { orderId, img, name, size } = item;

        return (
          <div key={orderId} className="flex w-full flex-col items-center">
            <div className="m-2">
              <img src={`/Assets/Products/${img}.png`} className="h-24" />
            </div>
            <div className="my-4 text-center ">
              <p className="text-lg font-bold text-secondary [text-shadow:0px_0px_1px_#ffffff]">
                {name}
              </p>
              <p className="uppercase">{size}</p>
              <RemoveItem productOrder={item} />
            </div>
            <PriceDetails productOrder={item} />
            <div className="divider md:w-3/4 md:self-center lg:w-2/3 xl:w-1/3" />
          </div>
        );
      })}
    </>
  );
};
