import { useNavigate } from 'react-router';

export const ActionButton: React.FC<{ isAdded: boolean; handleSubmit: () => void }> = ({
  isAdded,
  handleSubmit
}) => {
  const navigate = useNavigate();

  return (
    <div className="">
      {isAdded ? (
        <button className="btn" onClick={() => navigate('/store/view-cart')}>
          VIEW CART
        </button>
      ) : (
        <button className="btn" onClick={handleSubmit}>
          ADD TO CART
        </button>
      )}
    </div>
  );
};
