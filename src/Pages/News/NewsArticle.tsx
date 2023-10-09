import { useLoaderData } from 'react-router';
import { Article } from './NewsPage';

export const NewsArticle = () => {
  const loaderData = useLoaderData() as Article;
  const { date, title, text } = loaderData;

  return (
    <main>
      <h1>{title}</h1>
      <div className="date">
        <p>
          NEWS | <span>{date}</span>
        </p>
      </div>
      <div className="article-text">{text}</div>
    </main>
  );
};
