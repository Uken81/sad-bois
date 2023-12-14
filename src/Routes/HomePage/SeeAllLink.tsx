import { useNavigate } from 'react-router';

export const SeeAllLink: React.FC<{ to: string; text: string }> = ({ to, text }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end hover:text-yellow-500">
      <span className="mt-4 btn btn-outline" onClick={() => navigate(to)}>
        {text}
      </span>
    </div>
  );
};
