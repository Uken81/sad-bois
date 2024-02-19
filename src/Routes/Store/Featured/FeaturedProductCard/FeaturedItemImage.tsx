import { useNavigate } from 'react-router';

export const FeaturedItemImage: React.FC<{ id: string; img: string }> = ({ id, img }) => {
  const navigate = useNavigate();

  return (
    <figure className="w-1/2">
      <img
        src={`/Assets/Products/${img}.png`}
        className="h-full w-full object-contain"
        onClick={() => navigate(`/store/add-to-cart/${id}`)}
      />
    </figure>
  );
};
