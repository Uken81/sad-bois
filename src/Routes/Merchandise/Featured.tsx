import { useNavigate } from 'react-router';
import { ProductType } from './productsLoader';
import { Card, Carousel } from 'react-bootstrap';
import './merchandise.scss';

export const Featured: React.FC<{ featuredProducts: ProductType[] | null }> = ({
  featuredProducts
}) => {
  const navigate = useNavigate();

  if (!featuredProducts || featuredProducts.length === 0) {
    return null;
  }

  return (
    <Carousel className="featured" slide>
      {featuredProducts.map((product) => (
        <Carousel.Item
          key={product.id}
          onClick={() => navigate(`/store/add-to-cart/${product.id}`)}>
          <Card>
            <Card.Img
              className="card-img"
              variant="top"
              src={`../../../Assets/Products/${product.img}`}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Title>{product.subtitle}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
