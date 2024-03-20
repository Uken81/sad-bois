import { useNavigate } from 'react-router';
import { useAddStoreItem } from '../../Hooks/useAddStoreItem';
import { ProductType } from '../../DataLoaders/productsLoader';
import { TourType } from '../../Routes/RouteWrappers/TourWrapper';
import { useState } from 'react';
import { FixedErrorMessage } from '../ErrorMessages/FixedErrorMessage';

export interface ItemOrderData {
  item: ProductType | TourType;
  quantity: number;
  size?: string | null;
}

const AddButton: React.FC<{ isAdded: boolean; handleClick: () => void }> = ({
  isAdded,
  handleClick
}) => {
  const navigate = useNavigate();

  return isAdded ? (
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
  );
};

export const AddToCart: React.FC<{ itemOrderData: ItemOrderData }> = ({ itemOrderData }) => {
  const addItem = useAddStoreItem();
  const [isAdded, setIsAdded] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    setIsAdded(true);
    addItem(itemOrderData, setIsError);
  };

  return (
    <div>
      {isError ? (
        <FixedErrorMessage message="Error! Unable to add item" />
      ) : (
        <AddButton isAdded={isAdded} handleClick={handleClick} />
      )}
    </div>
  );
};
