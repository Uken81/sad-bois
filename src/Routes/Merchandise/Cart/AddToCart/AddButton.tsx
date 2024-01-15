import { useNavigate } from 'react-router';

export const AddButton: React.FC<{ isAdded: boolean; handleSubmit: () => void }> = ({
  isAdded,
  handleSubmit
}) => {
  const navigate = useNavigate();

  return (
    <div>
      {isAdded ? (
        <button className="btn btn-secondary" onClick={() => navigate('/store/view-cart')}>
          VIEW CART
        </button>
      ) : (
        <button className="btn btn-secondary" onClick={handleSubmit}>
          ADD TO CART
        </button>
      )}
    </div>
  );
};
