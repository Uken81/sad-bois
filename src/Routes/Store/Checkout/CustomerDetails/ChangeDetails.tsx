import { useNavigate } from 'react-router';

export const ChangeDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <p className="hover:cursor-pointer" onClick={() => navigate('/store/checkout/details')}>
      Change
    </p>
  );
};
