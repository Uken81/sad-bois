import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router';
import { MerchandiseData } from './productsLoader';
import './merchandise.scss';

export const Products: React.FC = () => {
  const loaderData = useLoaderData() as MerchandiseData;
  const products = loaderData.regular;
  const navigate = useNavigate();
  console.log('products: ', products);

  return (
    <Row className="products">
      {products.map((product) => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={4}>
          <ListGroup.Item className="product">
            <Card onClick={() => navigate(`/order-product/${product.id}`)}>
              <Card.Img variant="top" src={`../../../Assets/Products/${product.img}`} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Title>{product.subtitle}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        </Col>
      ))}
    </Row>
  );
};
