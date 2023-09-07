import { useLoaderData, useParams } from 'react-router';
import { Card } from 'react-bootstrap';
import { Product } from '../Merchandise/productsLoader';

import './productOrders.scss';

export const OrderProduct: React.FC = () => {
  const loaderData = useLoaderData() as Product[];
  const product: Product = loaderData[0];

  return (
    <main className="order-product">
      <h1>Order</h1>
      <Card className="product-card">
        <Card.Img variant="top" src={`../../../Assets/Products/${product.img}`} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Title>{product.subtitle}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </main>
  );
};
