import { useNavigate } from 'react-router';
import { useAddStoreItem } from '../../Hooks/useAddStoreItem';
import { ProductType } from '../../DataLoaders/productsLoader';
import { TourType } from '../../Routes/RouteWrappers/TourWrapper';
import { useState } from 'react';

export interface ItemOrderData {
  item: ProductType | TourType;
  quantity: number;
  size?: string | null;
}

export const AddButton: React.FC<{ itemOrderData: ItemOrderData }> = ({ itemOrderData }) => {
  const addItem = useAddStoreItem();
  const navigate = useNavigate();
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(true);
    addItem(itemOrderData);
  };

  return (
    <div>
      {isAdded ? (
        <button className="btn btn-secondary" onClick={() => navigate('/store/view-cart')}>
          VIEW CART
        </button>
      ) : (
        <>
          <button className="btn btn-secondary" onClick={handleClick}>
            ADD TO CART
          </button>
          {isAdded ? <p className="mt-1 text-center font-mono">Item added to cart</p> : null}
        </>
      )}
    </div>
  );
};
