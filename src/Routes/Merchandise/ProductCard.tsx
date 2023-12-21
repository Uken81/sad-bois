import { useNavigate } from 'react-router';
import { ProductType } from './productsLoader';
// import '../../../public/Assets/Products'
export const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  const navigate = useNavigate();
  const { id, img, title, subtitle, price } = product;

  return (
    <div
      key={id}
      className="card max-h-96 w-80  bg-yellow-50 shadow-xl"
      onClick={() => navigate(`/store/add-to-cart/${id}`)}>
      <figure className="p-4">
        <img
          src={`../../../public/Assets/Products/${img}`}
          className="h-full w-full object-contain"
        />
      </figure>
      <div className="card-body flex items-center space-x-2">
        <h2 className="card-title">
          {title}
          <div className="badge badge-accent">Featured</div>
        </h2>
        <p>{subtitle}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">${price}</div>
        </div>
      </div>
    </div>
  );
};
