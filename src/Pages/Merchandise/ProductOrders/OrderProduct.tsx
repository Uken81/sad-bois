import { useLoaderData } from 'react-router';
import { Product } from '../merchandiseLoader';
import './productOrders.scss';

export const OrderProduct: React.FC = () => {
  const loaderData = useLoaderData() as Product;
  const { img, title, subtitle, price } = loaderData;

  return (
    <div>
      <div>
        <img src={`../../../../public/Assets/Products/${img}`} className="product-card" />
      </div>
    </div>
  );

  // return (
  //   <main className="order-product">
  //     <h1>Order</h1>
  //     <Card className="product-card">
  //       <Card.Img variant="top" src={`../../../Assets/Products/${img}`} />
  //       <Card.Body>
  //         <Card.Title>{title}</Card.Title>
  //         <Card.Title>{subtitle}</Card.Title>
  //         <Card.Text>{price}</Card.Text>
  //       </Card.Body>
  //     </Card>
  //   </main>
  // );
};
