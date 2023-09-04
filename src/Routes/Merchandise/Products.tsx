// import { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router';

type Category = 'clothing' | 'sticker' | 'coffee-mug' | 'misc';

export interface Product {
  //could add available countries, member exclusive
  id: string;
  category: Category;
  title: string;
  subtitle: string;
  price: number;
  applyMemberDiscount: boolean;
  img: string;
}

export const Products: React.FC = () => {
  const products: Product[] = useLoaderData() as Product[];
  // const loaderData = useLoaderData();
  // const products: Product[] = loaderData as Product[];
  console.log('products: ', products[0].img);
  console.log('products: ', products);

  return (
    <ListGroup>
      {products.map((product) => (
        <ListGroup.Item key={product.id} style={{ width: '250px' }}>
          <Card>
            <Card.Img variant="top" src={`../../../Assets/Products/${product.img}`} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Title>{product.subtitle}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
            </Card.Body>
          </Card>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
