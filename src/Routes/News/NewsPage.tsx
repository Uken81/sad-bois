import { useLoaderData, useNavigate } from 'react-router';
import { capitaliseWords } from '../../Utils/capitaliseWords';
import { Article } from './DataLoaders/newsLoader';
import { format } from 'date-fns';

export const NewsPage: React.FC<{ latest?: Article[] }> = ({ latest }) => {
  const loaderData = useLoaderData() as Article[];
  const all = loaderData;
  const articles = latest || all;
  const dateHeading = articles.length === 3 ? 'LATEST NEWS' : 'NEWS';
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 lg:gap-8 xl:gap-10 justify-items-center mx-auto">
      {articles.map((article) => {
        const { id, img, date, title } = article;
        const formattedDate = format(new Date(date), 'dd/MM/yyyy');
        return (
          <div key={id} className="card w-72 bg-base-100 shadow-xl lg:w-80 xl:w-96">
            <figure>
              <img src={`../../../public/Assets/News/${img}.png`} alt={title} />
            </figure>
            <div className="card-body">
              <div className="flex items-center space-x-2">
                <h5 className="font-bold text-yellow-500">{dateHeading}:</h5>
                <h6>{formattedDate}</h6>
              </div>
              <h3 className="card-title">{capitaliseWords(title)}</h3>

              <div className="card-actions justify-end">
                <button className="btn btn-outline" onClick={() => navigate(`/news/article/${id}`)}>
                  Read More
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// return (
//   <Row className="article-summary">
//     {articles.map((article) => {
//       const { id, img, date, title } = article;
//       const formattedDate = format(new Date(date), 'dd/MM/yyyy');

//       return (
//         <Col key={article.id} xs={12} sm={6} md={4} lg={4}>
//           <ListGroup.Item className="article">
//             <Card>
//               <Card.Img variant="top" src={`../../../Assets/News/${img}.png`} />
//               <Card.Body>
//                 <Card.Subtitle>NEWS | {formattedDate}</Card.Subtitle>
//                 <Card.Title>{capitaliseWords(title)}</Card.Title>
//                 <Link to={`/news/article/${id}`} style={{ color: 'blue' }}>
//                   READ MORE
//                 </Link>
//               </Card.Body>
//             </Card>
//           </ListGroup.Item>
//         </Col>
//       );
//     })}
//   </Row>
// );
