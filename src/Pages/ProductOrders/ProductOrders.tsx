import { useLoaderData, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { MerchandiseData, Product } from '../Merchandise/productsLoader';

import './productOrders.scss';

export const OrderProduct: React.FC = () => {
  const { id } = useParams();
  const [selected, setSelected] = useState<Product>();
  const loaderData = useLoaderData() as Product[];
  const product: Product = loaderData[0];
  console.log('**Product** ', product);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:2001/products/byId?id=${id}`);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       console.log('data', data);
  //       setSelected(data[0]);
  //     } catch (error) {
  //       console.log('fetch failed: ', error);
  //     }
  //   };

  //   fetchData();
  // }, [id]);

  return (
    <main className="order-product">
      <h1>Order {id}</h1>
      {product && (
        <Card className="product-card">
          <Card.Img variant="top" src={`../../../Assets/Products/${product.img}`} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Title>{product.subtitle}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </main>
  );
  // return (
  //   <main className="order-product">
  //     <h1>Order {id}</h1>
  //     {selected && (
  //       <Card className="product-card">
  //         <Card.Img variant="top" src={`../../../Assets/Products/${selected.img}`} />
  //         <Card.Body>
  //           <Card.Title>{selected.title}</Card.Title>
  //           <Card.Title>{selected.subtitle}</Card.Title>
  //           <Card.Text>{selected.price}</Card.Text>
  //         </Card.Body>
  //       </Card>
  //     )}
  //   </main>
  // );
};
