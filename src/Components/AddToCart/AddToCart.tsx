import { useNavigate } from 'react-router';
import { ProductType } from '../../DataLoaders/productsLoader';
import { TourType } from '../../Routes/RouteWrappers/TourWrapper';
import { FixedErrorMessage } from '../ErrorMessages/FixedErrorMessage';
import { createProductOrder } from '../../Routes/Store/Cart/AddProductToCart/createProductOrder';
import { isEmptyObject } from '../../Utils/Validation/isEmptyObject';
import { useStore } from '../../Store/useStore';
import { useState } from 'react';

export interface ItemOrderData {
  item: ProductType | TourType;
  quantity: number;
  size?: string | null;
}

const ActionButton: React.FC<{ isAdded: boolean; handleClick: () => void }> = ({ isAdded, handleClick }) => {
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
  const addItem = useStore((state) => state.cartState.addItem);
  const [isAdded, setIsAdded] = useState(false);
  const [isError, setIsError] = useState(false);
  const productOrder = createProductOrder(itemOrderData);

  if (!productOrder || isEmptyObject(productOrder)) {
    console.error('Failed to create product order');
    setIsError(true);
    return;
  }

  const handleClick = () => {
    setIsAdded(true);
    addItem(productOrder);
  };

  return (
    <div>{isError ? <FixedErrorMessage message="Error! Unable to add item" /> : <ActionButton isAdded={isAdded} handleClick={handleClick} />}</div>
  );
};
