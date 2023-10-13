import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import { capitaliseWords } from '../../Utils/capitaliseWords';
import { Article } from './newsLoader';
import { format } from 'date-fns';

export const NewsPage: React.FC<{ onlyLatest: boolean }> = ({ onlyLatest }) => {
  const loaderData = useLoaderData() as Article[];
  const latestArticles = loaderData.slice(0, 3);
  const articles = onlyLatest ? latestArticles : loaderData;

  return (
    <Row className="article-summary">
      {articles.map((article) => {
        const { id, date, title } = article;
        // const formattedDate = format(date, 'MM/dd/yyyy');
        return (
          <Col key={article.id} xs={12} sm={6} md={4} lg={4}>
            <ListGroup.Item className="article">
              <Card>
                <Card.Img variant="top" src={`../../../Assets/News/${article.img}`} />
                <Card.Body>
                  {/* <Card.Subtitle>NEWS | {formattedDate}</Card.Subtitle> */}
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
