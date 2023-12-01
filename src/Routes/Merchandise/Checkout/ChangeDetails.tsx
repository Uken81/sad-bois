import { useNavigate } from 'react-router';

export const ChangeDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <p className="change-details" onClick={() => navigate('/checkout/details')}>
      Change
    </p>
  );
};
