import { useNavigate } from 'react-router';

export const ArticleLink: React.FC<{ id: string }> = ({ id }) => {
  const navigate = useNavigate();

  return (
    <div className="card-actions mr-auto mt-2 justify-end border-b border-l border-black duration-300 hover:bg-accent hover:text-white">
      <p
        className="px-1 text-lg hover:cursor-pointer"
        onClick={() => navigate(`/news/article/${id}`)}>
        Read More
      </p>
    </div>
  );
};
