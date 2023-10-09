import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import { capitaliseWords } from '../../Utils/capitaliseWords';
import { Article } from './newsLoader';

export const NewsPage = () => {
  const news = useLoaderData() as Article[];
  console.log('news', news);
  return (
    <Row className="news">
      {news.map((article) => (
        <Col key={article.id} xs={12} sm={6} md={4} lg={4}>
          <ListGroup.Item className="article">
            <Card>
              <Card.Img variant="top" src={`../../../Assets/News/${article.img}`} />
              <Card.Body>
                <Card.Subtitle>NEWS | {article.date}</Card.Subtitle>
                <Card.Title>{capitaliseWords(article.title)}</Card.Title>
                <Link to={`/news/${article.id}`}>READ MORE</Link>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        </Col>
      ))}
    </Row>
  );
};
