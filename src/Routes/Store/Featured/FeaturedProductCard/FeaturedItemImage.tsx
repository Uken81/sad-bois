import { useNavigate } from 'react-router';
import { ImageWithLoading } from '../../../../Components/ImageWithLoading';

export const FeaturedItemImage: React.FC<{ id: string; img: string }> = ({ id, img }) => {
  const navigate = useNavigate();

  return (
    <figure className="w-1/2" onClick={() => navigate(`/store/add-to-cart/${id}`)}>
      <ImageWithLoading
        src={`/Assets/Products/${img}.png`}
        style={{ height: '100%', width: '100%', objectFit: 'contain' }}
      />
    </figure>
  );
};
