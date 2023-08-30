import { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

type Category = 'clothing' | 'sticker' | 'coffee-mug' | 'misc';

interface Product {
  //could add available countries, member exclusive
  id: string;
  category: Category;
  title: string;
  subtitle: string;
  price: number;
  applyMemberDiscount: boolean;
  image?: string;
}

export const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:2001/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log('products-data', data);
      })
      .catch((error) => {
        console.log('fetch failed: ', error);
      });
  }, []);

  return (
    <ListGroup>
      {products.map((product) => (
        <ListGroup.Item key={product.id}>
          <Card>
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
