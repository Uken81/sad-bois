import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router';
import { Merchandise } from './merchandiseLoader';
import './merchandise.scss';
import { ProductCategories } from './Categories';

export const Products: React.FC<{ selectedCategory: ProductCategories }> = ({
  selectedCategory
}) => {
  const loaderData = useLoaderData() as Merchandise;
  const merchandise = loaderData.regular;
  const displayedProducts =
    selectedCategory === 'all'
      ? merchandise
      : merchandise.filter((item) => item.category === selectedCategory);
  const navigate = useNavigate();

  return (
    <Row className="products">
      {displayedProducts.map((item) => {
        const { id, img, title, subtitle, price } = item;
        return (
          <Col key={id} xs={12} sm={6} md={4} lg={4}>
            <ListGroup.Item className="item">
              <Card onClick={() => navigate(`/order-product/${id}`)}>
                <Card.Img variant="top" src={`../../../Assets/Products/${img}`} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Title>{subtitle}</Card.Title>
                  <Card.Text>{price}</Card.Text>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          </Col>
        );
      })}
    </Row>
  );
};
