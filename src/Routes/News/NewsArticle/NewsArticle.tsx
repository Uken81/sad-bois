import { useLoaderData } from 'react-router';
import { Article } from '../../../DataLoaders/newsLoader';
import { Share } from './Share';
import { ArticleDate } from './ArticleDate';

export const NewsArticle = () => {
  const loaderData = useLoaderData() as Article;
  const { img, date, title, text } = loaderData;

  return (
    <main className="md:mx-24 lg:mx-48 xl:mx-64">
      <h1 className="h1-font my-2  text-center md:m-4 md:text-5xl">{title}</h1>
      <div className="divider" />
      <div className="mx-8 flex flex-row justify-between md:my-4">
        <ArticleDate date={date} />
        <Share />
      </div>
      <figure className="flex justify-center">
        <img className="my-4 h-96" src={`/Assets/News/${img}.png`} alt={title} />
      </figure>
      <div className="my-4 px-8 font-mono text-lg leading-relaxed lg:text-2xl 2xl:mx-48">
        <div className="divider" />
        {text}
      </div>
    </main>
  );
};
