import { useNavigate } from 'react-router';

export const SeeAllLink: React.FC<{ destination: string; text: string }> = ({
  destination,
  text
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center hover:text-yellow-500 md:justify-end">
      <span className="btn btn-accent hover:btn-outline" onClick={() => navigate(destination)}>
        {text}
      </span>
    </div>
  );
};
