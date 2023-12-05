import { useNavigate } from 'react-router';

export const ChangeDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <p className="change-details" onClick={() => navigate('/store/checkout/details')}>
      Change
    </p>
  );
};
