import { useNavigate } from 'react-router';

export const SeeAllLink: React.FC<{ to: string; text: string }> = ({ to, text }) => {
  const navigate = useNavigate();
  return <span onClick={() => navigate(to)}>{text}</span>;
};
