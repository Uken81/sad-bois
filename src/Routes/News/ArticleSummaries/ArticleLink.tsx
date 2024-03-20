import { useNavigate } from 'react-router';

export const ArticleLink: React.FC<{ id: string }> = ({ id }) => {
  const navigate = useNavigate();

  return (
    <div className="btn card-actions btn-sm mr-auto mt-2 w-1/2 rounded-full border-accent bg-opacity-0 hover:border-white hover:bg-primary">
      <p
        className="px-1 text-lg hover:cursor-pointer"
        onClick={() => navigate(`/news/article/${id}`)}>
        Read More
      </p>
    </div>
  );
};
