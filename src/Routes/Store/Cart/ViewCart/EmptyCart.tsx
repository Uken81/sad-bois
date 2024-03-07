import { useNavigate } from 'react-router';

export const EmptyCart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-10">
      <h2 className="text-h2 font-h2">Your cart is currently empty.</h2>
      <button className="btn btn-secondary" onClick={() => navigate('/store')}>
        Shop Now
      </button>
    </div>
  );
};
