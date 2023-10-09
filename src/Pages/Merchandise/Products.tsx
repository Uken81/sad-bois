import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router';
import { Merchandise } from './merchandiseLoader';
import './merchandise.scss';

export const Products: React.FC = () => {
  const loaderData = useLoaderData() as Merchandise;
  const merchandise = loaderData.regular;
  const navigate = useNavigate();
  console.log('products: ', merchandise);

  return (
    <Row className="products">
      {merchandise.map((item) => (
        <Col key={item.id} xs={12} sm={6} md={4} lg={4}>
          <ListGroup.Item className="item">
            <Card onClick={() => navigate(`/order-product/${item.id}`)}>
              <Card.Img variant="top" src={`../../../Assets/Products/${item.img}`} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Title>{item.subtitle}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        </Col>
      ))}
    </Row>
  );
};
