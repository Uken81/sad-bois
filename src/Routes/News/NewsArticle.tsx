import { useLoaderData } from 'react-router';
import { Article } from './DataLoaders/newsLoader';
import { format } from 'date-fns';
import { ShareButton } from '../../Components/Share/ShareButton';

export const NewsArticle = () => {
  const loaderData = useLoaderData() as Article;
  const { date, title, text } = loaderData;
  const formattedDate = format(new Date(date), 'dd/MM/yyyy');

  return (
    <main>
      <div>
        <h1>{title}</h1>
        <div className="date">
          <p>
            NEWS | <span>{formattedDate}</span>
          </p>
        </div>
        <div>
          <ShareButton />
        </div>
      </div>
      <div className="article-text">{text}</div>
    </main>
  );
};
