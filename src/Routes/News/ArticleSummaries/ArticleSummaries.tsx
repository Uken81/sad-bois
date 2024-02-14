import { format } from 'date-fns';
import { Article } from '../../../DataLoaders/newsLoader';
import { useNavigate } from 'react-router';
import { capitaliseWords } from '../../../Utils/capitaliseWords';
import { ArticleLink } from './ArticleLink';

export const ArticleSummaries: React.FC<{ articles: Article[] }> = ({ articles }) => {
  const navigate = useNavigate();
  const dateHeading = articles.length === 3 ? 'LATEST NEWS' : 'NEWS';

  return (
    <>
      {articles.map((article) => {
        const { id, img, date, title } = article;
        const formattedDate = format(new Date(date), 'dd/MM/yyyy');

        return (
          <div
            key={id}
            className="card w-72 bg-base-300 shadow-sm shadow-neutral-500 lg:w-80 xl:w-96"
            onClick={() => navigate(`/news/article/${id}`)}>
            <figure>
              <img src={`/Assets/News/${img}.png`} alt={title} />
            </figure>
            <div className="card-body">
              <div className="flex items-center">
                <span className="mr-2 font-bold">{dateHeading}:</span>
                <span className="">{formattedDate}</span>
              </div>
              <h3 className="card-title text-primary">{capitaliseWords(title)}</h3>
              <ArticleLink id={id} />
            </div>
          </div>
        );
      })}
    </>
  );
};
