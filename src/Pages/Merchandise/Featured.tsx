import { useLoaderData, useNavigate } from 'react-router';
import { Merchandise } from './merchandiseLoader';
import { Card, Carousel } from 'react-bootstrap';
import './merchandise.scss';

export const Featured: React.FC = () => {
  const loaderData = useLoaderData() as Merchandise;
  const featured = loaderData.featured;
  const navigate = useNavigate();

  console.log('featured ', featured);
  return (
    <Carousel className="featured" slide>
      {featured.map((product) => (
        <Carousel.Item key={product.id} onClick={() => navigate(`/order-product/${product.id}`)}>
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
