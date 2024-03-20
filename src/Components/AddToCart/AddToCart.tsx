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
        <div role="alert" className="alert alert-error">
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Unable to add item</span>
          </div>
          <p>Please refresh page or contact support</p>
        </div>
      ) : (
        <AddButton isAdded={isAdded} handleClick={handleClick} />
      )}
    </div>
  );
};
