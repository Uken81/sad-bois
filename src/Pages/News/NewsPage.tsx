import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import { capitaliseWords } from '../../Utils/capitaliseWords';
import { Article } from './DataLoaders/newsLoader';
import { format } from 'date-fns';

export const NewsPage: React.FC<{ latest?: Article[] }> = ({ latest }) => {
  const loaderData = useLoaderData() as Article[];
  const regular = loaderData;
  const articles = latest || regular;

  return (
    <Row className="article-summary">
      {articles.map((article) => {
        const { id, date, title } = article;
        const formattedDate = format(new Date(date), 'dd/MM/yyyy');

        console.log('datetype', typeof date);
        return (
          <Col key={article.id} xs={12} sm={6} md={4} lg={4}>
            <ListGroup.Item className="article">
              <Card>
                <Card.Img variant="top" src={`../../../Assets/News/${article.img}`} />
                <Card.Body>
                  <Card.Subtitle>NEWS | {formattedDate}</Card.Subtitle>
                  <Card.Title>{capitaliseWords(title)}</Card.Title>
                  <Link to={`/news/${id}`} style={{ color: 'blue' }}>
                    READ MORE
                  </Link>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          </Col>
        );
      })}
    </Row>
  );
};
